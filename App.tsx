import React, { useState, useEffect, useMemo } from 'react';
import { questions } from './data/questions';
import QuestionCard from './components/QuestionCard';
import { AppState, FilterType } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('signals-app-state');
    return saved ? JSON.parse(saved) : { answers: {}, favorites: [], wrongIds: [] };
  });
  
  const [filter, setFilter] = useState<FilterType>('all');
  const [search, setSearch] = useState('');

  // Handle Dark Mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Persist State
  useEffect(() => {
    localStorage.setItem('signals-app-state', JSON.stringify(state));
  }, [state]);

  const handleSelect = (questionId: number, optionId: string) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const isCorrect = optionId === question.correctOptionId;
    
    setState(prev => {
      const newWrongIds = isCorrect 
        ? prev.wrongIds.filter(id => id !== questionId) // Remove if correct
        : Array.from(new Set([...prev.wrongIds, questionId])); // Add if wrong

      return {
        ...prev,
        answers: { ...prev.answers, [questionId]: optionId },
        wrongIds: newWrongIds
      };
    });
  };

  const toggleFavorite = (questionId: number) => {
    setState(prev => ({
      ...prev,
      favorites: prev.favorites.includes(questionId)
        ? prev.favorites.filter(id => id !== questionId)
        : [...prev.favorites, questionId]
    }));
  };

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = q.content.toLowerCase().includes(search.toLowerCase());
      if (!matchesSearch) return false;

      if (filter === 'favorites') return state.favorites.includes(q.id);
      if (filter === 'wrong') return state.wrongIds.includes(q.id);
      return true;
    });
  }, [filter, search, state.favorites, state.wrongIds]);

  const progress = Math.round((Object.keys(state.answers).length / questions.length) * 100);

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">信号与系统复习</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">共 {questions.length} 题 · 进度 {progress}%</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pt-6">
        {/* Controls */}
        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="搜索题目关键词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { id: 'all', label: '全部题目' },
              { id: 'wrong', label: `错题集 (${state.wrongIds.length})` },
              { id: 'favorites', label: `收藏 (${state.favorites.length})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as FilterType)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(q => (
              <QuestionCard
                key={q.id}
                question={q}
                selectedOptionId={state.answers[q.id]}
                onSelect={handleSelect}
                isFavorite={state.favorites.includes(q.id)}
                onToggleFavorite={toggleFavorite}
                showResult={!!state.answers[q.id]}
              />
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 dark:text-slate-400">
              <div className="text-4xl mb-3">👻</div>
              <p>没有找到相关题目</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;