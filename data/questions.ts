import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    content: "若 $F_1(j\\omega) = F[f_1(t)]$，则 $F_2(j\\omega) = F[f_1(4-2t)] = $ 。",
    correctOptionId: "D",
    options: [
      { id: "A", label: "A", content: "$\\frac{1}{2}F_1(j\\omega)e^{-j4\\omega}$" },
      { id: "B", label: "B", content: "$\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j4\\omega}$" },
      { id: "C", label: "C", content: "$F_1(-j\\omega)e^{-j\\omega}$" },
      { id: "D", label: "D", content: "$\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j2\\omega}$" }
    ],
    explanation: "本题考查傅里叶变换的尺度变换与时移性质。\n\n**解题思路：**\n1. **变形处理**：首先将 $f_1(4-2t)$ 写成标准形式 $f_1[-2(t-2)]$，这样可以清晰地看出先进行了尺度变换，再进行了时移变换（或者反之，但推荐先看尺度后看时移）。\n\n2. **应用尺度变换**：\n   设中间信号 $g(t) = f_1(-2t)$。\n   根据性质 $f(at) \\leftrightarrow \\frac{1}{|a|}F(\\frac{j\\omega}{a})$，这里 $a=-2$。\n   则 $G(j\\omega) = \\frac{1}{|-2|}F_1(\\frac{j\\omega}{-2}) = \\frac{1}{2}F_1(-j\\frac{\\omega}{2})$。\n\n3. **应用时移性质**：\n   原信号可以看作 $g(t)$ 右移 2 个单位得到，即 $f_1[-2(t-2)] = g(t-2)$。\n   根据时移性质 $f(t-t_0) \\leftrightarrow F(j\\omega)e^{-j\\omega t_0}$，这里 $t_0=2$。\n   所以 $F_2(j\\omega) = G(j\\omega)e^{-j2\\omega} = \\left[\\frac{1}{2}F_1(-j\\frac{\\omega}{2})\\right] e^{-j2\\omega}$。\n\n**结论：**\n最终结果为 $\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j2\\omega}$。\n故正确答案为 D。"
  },
  {
    id: 2,
    content: "非周期连续信号被理想冲激取样后，取样信号的频谱 $F_s(j\\omega)$ 是。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "离散频谱" },
      { id: "B", label: "B", content: "连续频谱" },
      { id: "C", label: "C", content: "连续周期频谱" },
      { id: "D", label: "D", content: "不确定，要依赖于信号而变化" }
    ],
    explanation: "本题考查理想采样的频谱特性。\n\n**解题分析：**\n1. **时域表达式**：\n   理想冲激取样信号 $f_s(t) = f(t) \\cdot p(t) = f(t) \\sum_{n=-\\infty}^{\\infty} \\delta(t-nT_s)$。\n\n2. **频域表达式**：\n   利用频域卷积定理，或者直接利用采样定理公式：\n   $F_s(j\\omega) = \\frac{1}{T_s} \\sum_{n=-\\infty}^{\\infty} F(j(\\omega - n\\omega_s))$\n   其中 $\\omega_s = \\frac{2\\pi}{T_s}$ 为采样角频率。\n\n3. **特性判断**：\n   - **周期性**：由公式可见，$F_s(j\\omega)$ 是原频谱 $F(j\\omega)$ 以 $\\omega_s$ 为周期进行平移叠加形成的，因此必然是**周期**的。\n   - **连续性**：原信号 $f(t)$ 是非周期连续信号，根据傅里叶变换性质，其频谱 $F(j\\omega)$ 一般是连续谱（非离散谱线）。周期的延拓叠加不会破坏连续性（除非原谱本身离散）。因此它是**连续**的。\n\n**结论：**\n取样信号的频谱是**连续周期频谱**。\n故正确答案为 C。"
  },
  {
    id: 3,
    content: "已知 $f(t)$ 的频带宽度为 $\\Delta\\omega$，则 $f(2t-4)$ 的频带宽度为。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "$2\\Delta\\omega$" },
      { id: "B", label: "B", content: "$\\frac{1}{2}\\Delta\\omega$" },
      { id: "C", label: "C", content: "$2(\\Delta\\omega-4)$" },
      { id: "D", label: "D", content: "$2(\\Delta\\omega-2)$" }
    ],
    explanation: "本题考查信号的时域展缩对频带宽度的影响。\n\n**解题步骤：**\n1. **信号分解**：\n   $f(2t-4) = f(2(t-2))$。\n   该变换包含两个步骤：先尺度变换 $t \\to 2t$，再时移 $t \\to t-2$。\n\n2. **分析时移影响**：\n   时移 $(t-2)$ 在频域对应乘以相位因子 $e^{-j2\\omega}$。模值 $|F(j\\omega)|$ 不变，因此**不改变幅度谱的形状和带宽**。\n\n3. **分析尺度影响**：\n   $f(2t)$ 对应频域 $\\frac{1}{2}F(j\\frac{\\omega}{2})$。\n   时域发生压缩（速度变快），包含的高频分量增加。\n   频域的变量由 $\\omega$ 变为 $\\frac{\\omega}{2}$，意味着图形在频率轴上**扩展**了 2 倍。\n\n4. **计算带宽**：\n   原带宽为 $\\Delta\\omega$，扩展 2 倍后，新带宽为 $2\\Delta\\omega$。\n\n**结论：**\n故正确答案为 A。"
  },
  {
    id: 4,
    content: "$\\int_{-3}^{3} \\cos\\frac{\\pi}{2}t \\cdot \\delta(t+2)dt$ 等于。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "0" },
      { id: "B", label: "B", content: "-1" },
      { id: "C", label: "C", content: "2" },
      { id: "D", label: "D", content: "-2" }
    ],
    explanation: "本题考查冲激函数的筛选性质。\n\n**解题公式：**\n筛选性质 $\\int_{a}^{b} f(t)\\delta(t-t_0)dt = \\begin{cases} f(t_0), & t_0 \\in (a, b) \\\\ 0, & t_0 \\notin (a, b) \\end{cases}$\n\n**解题步骤：**\n1. **确定冲激点**：\n   $\\delta(t+2)$ 的冲激点在 $t+2=0 \\Rightarrow t_0 = -2$。\n\n2. **检查积分区间**：\n   积分区间为 $[-3, 3]$。因为 $-3 < -2 < 3$，所以冲激点在区间内，筛选性质有效。\n\n3. **代入求值**：\n   根据性质，积分值等于被积函数 $f(t) = \\cos(\\frac{\\pi}{2}t)$ 在 $t = -2$ 处的值。\n   $Value = \\cos(\\frac{\\pi}{2} \\times (-2)) = \\cos(-\\pi)$。\n\n4. **计算结果**：\n   $\\cos(-\\pi) = -1$。\n\n**结论：**\n故正确答案为 B。"
  },
  {
    id: 5,
    content: "信号 $x(t) = 3\\cos(4t + \\pi/3)$ 的周期是。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "$2\\pi$" },
      { id: "B", label: "B", content: "$\\pi$" },
      { id: "C", label: "C", content: "$\\pi/2$" },
      { id: "D", label: "D", content: "$2\\pi$" }
    ],
    explanation: "本题考查连续正弦信号的周期计算。\n\n**解题步骤：**\n1. **识别角频率**：\n   标准形式 $A\\cos(\\omega t + \\varphi)$。\n   由题可知 $\\omega = 4$ rad/s。\n\n2. **计算周期**：\n   周期公式 $T = \\frac{2\\pi}{\\omega}$。\n   代入得 $T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。\n\n**结论：**\n故正确答案为 C。"
  },
  {
    id: 6,
    content: "信号 $x(n) = 2\\cos(n\\pi/4) + \\sin(n\\pi/8) - 2\\cos(n\\pi/2 + \\pi/6)$ 的周期是。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "8" },
      { id: "B", label: "B", content: "16" },
      { id: "C", label: "C", content: "2" },
      { id: "D", label: "D", content: "4" }
    ],
    explanation: "本题考查离散序列的周期计算。\n\n**解题原理：**\n离散正弦序列 $\\cos(\\omega_0 n)$ 的周期 $N$ 满足 $N = \\frac{2\\pi}{\\omega_0} k$，其中 $N, k$ 为互质的整数。即找到最小的整数 $N$ 使得 $\\frac{2\\pi}{\\omega_0} N$ 为 $2\\pi$ 的整数倍。\n总周期为各分量周期的最小公倍数 (LCM)。\n\n**解题步骤：**\n1. **第一项** $\\cos(n\\pi/4)$：\n   $\\omega_1 = \\frac{\\pi}{4}$。\n   $N_1 = \\frac{2\\pi}{\\pi/4} = 8$。这是整数，故 $N_1=8$。\n\n2. **第二项** $\\sin(n\\pi/8)$：\n   $\\omega_2 = \\frac{\\pi}{8}$。\n   $N_2 = \\frac{2\\pi}{\\pi/8} = 16$。这是整数，故 $N_2=16$。\n\n3. **第三项** $\\cos(n\\pi/2)$：\n   $\\omega_3 = \\frac{\\pi}{2}$。\n   $N_3 = \\frac{2\\pi}{\\pi/2} = 4$。这是整数，故 $N_3=4$。\n\n4. **求最小公倍数**：\n   $N = LCM(8, 16, 4) = 16$。\n\n**结论：**\n故正确答案为 B。"
  },
  {
    id: 7,
    content: "设当 $n<-2$ 和 $n>4$ 时，$x(n)=0$，则序列 $x(n-3)$ 为零的 $n$ 值为。",
    correctOptionId: "D",
    options: [
      { id: "A", label: "A", content: "$n=3$" },
      { id: "B", label: "B", content: "$n<7$" },
      { id: "C", label: "C", content: "$n>7$" },
      { id: "D", label: "D", content: "$n<1$ 和 $n>7$" }
    ],
    explanation: "本题考查离散序列的时移对支撑区间（非零区间）的影响。\n\n**解题步骤：**\n1. **确定原信号非零区间**：\n   $x(n)$ 在 $n<-2$ 和 $n>4$ 时为 0，说明其非零值集中在 $[-2, 4]$ 这一闭区间内。\n   即 Support($x(n)$) = $[-2, 4]$。\n\n2. **分析变换**：\n   $y(n) = x(n-3)$ 是将原信号向**右平移** 3 个单位。\n\n3. **计算新区间**：\n   左端点：$-2 + 3 = 1$。\n   右端点：$4 + 3 = 7$。\n   所以 $y(n)$ 的非零区间为 $[1, 7]$。\n\n4. **确定为零区域**：\n   在非零区间之外即为零。\n   即 $n < 1$ 或 $n > 7$。\n\n**结论：**\n故正确答案为 D。"
  },
  {
    id: 8,
    content: "连续时间信号 $f(t)$ 的占有频带为 $0 \\sim 10\\text{KHz}$，经均匀抽样后，构成一离散时间信号，为保证能从离散信号中恢复原信号 $f(t)$，则抽样周期的值最大不超过。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "$10^{-4}\\text{s}$" },
      { id: "B", label: "B", content: "$10^{-5}\\text{s}$" },
      { id: "C", label: "C", content: "$5\\times 10^{-5}\\text{s}$" },
      { id: "D", label: "D", content: "$10^{-3}\\text{s}$" }
    ],
    explanation: "本题考查奈奎斯特采样定理及采样周期的计算。\n\n**解题步骤：**\n1. **确定最高频率**：\n   $f_m = 10 \\text{ KHz} = 10 \\times 10^3 \\text{ Hz} = 10^4 \\text{ Hz}$。\n\n2. **计算奈奎斯特频率**：\n   根据采样定理，采样频率 $f_s$ 必须满足 $f_s \\ge 2f_m$。\n   $f_s \\ge 2 \\times 10^4 = 20000 \\text{ Hz}$。\n\n3. **计算最大采样周期**：\n   采样周期 $T_s = \\frac{1}{f_s}$。\n   因为 $f_s \\ge 20000$，所以 $T_s \\le \\frac{1}{20000}$。\n\n4. **数值计算**：\n   $T_s \\le 0.5 \\times 10^{-4} \\text{ s} = 5 \\times 10^{-5} \\text{ s}$。\n\n**结论：**\n最大不超过 $5 \\times 10^{-5}$ 秒。\n故正确答案为 C。"
  },
  {
    id: 9,
    content: "设当 $t<3$ 时，$x(t)=0$，则使 $x(1-t) \\cdot x(2-t) = 0$ 的 $t$ 值为。",
    correctOptionId: "D",
    options: [
      { id: "A", label: "A", content: "$t>2$ 或 $t>-1$" },
      { id: "B", label: "B", content: "$t=1$ 和 $t=2$" },
      { id: "C", label: "C", content: "$t>-1$" },
      { id: "D", label: "D", content: "$t>-2$" }
    ],
    explanation: "本题考查信号的非零区间变换及乘积运算。\n\n**解题思路：**\n求乘积为 0 的区域，通常先求乘积**不为 0** 的区域，然后取反。\n\n**步骤：**\n1. **原信号非零条件**：\n   已知 $x(\\tau) \\neq 0$ 的必要条件是 $\\tau \\ge 3$（题目说 $<3$ 为 0，则 $\\ge 3$ 才可能有值）。\n\n2. **分析第一项 $x(1-t)$**：\n   若 $x(1-t) \\neq 0$，需满足 $1-t \\ge 3 \\Rightarrow -t \\ge 2 \\Rightarrow t \\le -2$。\n\n3. **分析第二项 $x(2-t)$**：\n   若 $x(2-t) \\neq 0$，需满足 $2-t \\ge 3 \\Rightarrow -t \\ge 1 \\Rightarrow t \\le -1$。\n\n4. **求乘积非零区间**：\n   两项必须同时非零，乘积才非零。\n   区间交集：$(t \\le -2) \\cap (t \\le -1) = t \\le -2$。\n\n5. **求乘积为零区间**：\n   非零区间的补集即为零区间。\n   $(t \\le -2)$ 的补集是 $t > -2$。\n\n**结论：**\n故正确答案为 D。"
  },
  {
    id: 10,
    content: "如果一离散时间系统的系统函数 $H(z)$ 只有一个在单位圆上实数为1的极点，则它的 $h(n)$ 应是。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "$u(n)$" },
      { id: "B", label: "B", content: "$-u(n)$" },
      { id: "C", label: "C", content: "$(-1)^n u(n)$" },
      { id: "D", label: "D", content: "1" }
    ],
    explanation: "本题考查 Z 变换极点与时域信号模式的对应关系。\n\n**解题分析：**\n1. **极点位置**：\n   题目指出极点为 $z=1$。\n   系统函数形式通常为 $H(z) = \\frac{z}{z-1}$ 或 $H(z) = \\frac{1}{1-z^{-1}}$。\n\n2. **对应时域模式**：\n   根据常用 Z 变换对：\n   $a^n u(n) \\leftrightarrow \\frac{z}{z-a}$。\n   当 $a=1$ 时，$1^n u(n) = u(n) \\leftrightarrow \\frac{z}{z-1}$。\n\n3. **排除其他选项**：\n   C 选项 $(-1)^n u(n)$ 对应极点 $z=-1$。\n   D 选项 $1$ (直流全时域) 对应边界情况，通常描述为 $u(n)$ 更准确对应单极点系统冲激响应。\n\n**结论：**\n极点为 1 对应阶跃序列 $u(n)$。\n故正确答案为 A。"
  },
  {
    id: 11,
    content: "线性时不变系统输出中的自由响应的形式由决定",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "系统函数极点的位置" },
      { id: "B", label: "B", content: "激励信号的形式" },
      { id: "C", label: "C", content: "系统起始状态" },
      { id: "D", label: "D", content: "以上均不对" }
    ],
    explanation: "本题考查系统响应的组成及性质。\n\n**解题分析：**\n1. **自由响应定义**：\n   自由响应（Free Response）是指系统在没有外加激励作用下，仅由系统初始储能引起的响应。其数学形式是微分方程齐次解的线性组合。\n\n2. **齐次解的形式**：\n   齐次解的形式 $Ce^{\\lambda t}$ 完全取决于特征方程的根 $\\lambda$。\n   而特征方程的根，正是系统传递函数 $H(s)$ 的极点。\n\n3. **强迫响应对比**：\n   强迫响应（特解）的形式取决于激励信号的形式（极点）。\n\n**结论：**\n自由响应的模态（形式）由系统的极点决定。\n故正确答案为 A。"
  },
  {
    id: 12,
    content: "已知信号 $f(t)$ 的频带宽度为 $\\Delta\\omega$，则 $f(3t-2)$ 的频带宽度为_____。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "$3\\Delta\\omega$" },
      { id: "B", label: "B", content: "$\\Delta\\omega/3$" },
      { id: "C", label: "C", content: "$(\\Delta\\omega-2)/3$" },
      { id: "D", label: "D", content: "$(\\Delta\\omega-6)/3$" }
    ],
    explanation: "本题考查信号尺度变换的频域特性。\n\n**解题步骤：**\n1. **忽略时移**：\n   $f(3t-2)$ 中的时移 $-2$ 只改变频谱的相位，不改变幅度谱，因此不改变带宽。我们只需关注 $f(3t)$。\n\n2. **尺度变换性质**：\n   若 $f(t) \\leftrightarrow F(j\\omega)$，带宽为 $\\Delta\\omega$。\n   则 $f(at) \\leftrightarrow \\frac{1}{|a|}F(j\\frac{\\omega}{a})$。\n\n3. **分析本题**：\n   这里 $a=3$。\n   频谱变为 $F(j\\frac{\\omega}{3})$。这意味着原频谱图形被横向拉伸了 3 倍（因为要代入 $3\\Delta\\omega$ 才能得到原函数同样的边界值）。\n   例如原截止频率为 $\\omega_c$，新截止频率 $\\omega_c'$ 满足 $\\omega_c'/3 = \\omega_c \\Rightarrow \\omega_c' = 3\\omega_c$。\n\n**结论：**\n带宽变为原来的 3 倍。\n故正确答案为 A。"
  },
  {
    id: 13,
    content: "设当 $t<3$ 时，$x(t)=0$，则使 $x(t/3)=0$ 的 $t$ 值为。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "$t>3$" },
      { id: "B", label: "B", content: "$t=0$" },
      { id: "C", label: "C", content: "$t<9$" },
      { id: "D", label: "D", content: "$t=3$" }
    ],
    explanation: "本题考查时域尺度变换对信号支撑区间的拉伸影响。\n\n**解题步骤：**\n1. **原信号零区间**：\n   $x(\\tau) = 0$ 的条件是 $\\tau < 3$。\n\n2. **变量代换**：\n   现在信号为 $y(t) = x(t/3)$。\n   令内部变量 $\\tau = t/3$。\n\n3. **求解新区间**：\n   要使 $x(t/3) = 0$，需满足内部变量 $t/3 < 3$。\n   解不等式得：$t < 9$。\n\n**物理意义：**\n$t \\to t/3$ 是将信号在时域**扩展**（变慢）3 倍。原起点是 3，扩展后起点变为 $3 \\times 3 = 9$。小于 9 的部分均为 0。\n\n**结论：**\n故正确答案为 C。"
  },
  {
    id: 14,
    content: "$\\int_{-\\infty}^{t} \\delta(\\tau)\\frac{\\sin 2\\tau}{\\tau} d\\tau = $ 。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "$2u(t)$" },
      { id: "B", label: "B", content: "$4\\delta(t)$" },
      { id: "C", label: "C", content: "4" },
      { id: "D", label: "D", content: "$4u(t)$" }
    ],
    explanation: "本题考查冲激函数与普通函数的乘积性质及变上限积分。\n\n**解题步骤：**\n1. **简化被积函数**：\n   利用性质 $f(t)\\delta(t) = f(0)\\delta(t)$。\n   被积函数中 $f(\\tau) = \\frac{\\sin 2\\tau}{\\tau}$。\n   当 $\\tau \\to 0$ 时，利用洛必达法则或重要极限：$\\lim_{\\tau \\to 0} \\frac{\\sin 2\\tau}{\\tau} = 2$。\n   所以：$\\delta(\\tau)\\frac{\\sin 2\\tau}{\\tau} = 2\\delta(\\tau)$。\n\n2. **代入积分**：\n   原式 $= \\int_{-\\infty}^{t} 2\\delta(\\tau) d\\tau = 2 \\int_{-\\infty}^{t} \\delta(\\tau) d\\tau$。\n\n3. **利用阶跃函数定义**：\n   冲激函数的变上限积分就是阶跃函数：$\\int_{-\\infty}^{t} \\delta(\\tau) d\\tau = u(t)$。\n\n**结论：**\n结果为 $2u(t)$。\n故正确答案为 A。"
  },
  {
    id: 15,
    content: "单边拉普拉斯变换 $F(s) = \\frac{2s+1}{s^2}e^{-2s}$ 的原函数等于。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "$tu(t)$" },
      { id: "B", label: "B", content: "$tu(t-2)$" },
      { id: "C", label: "C", content: "$(t-2)u(t)$" },
      { id: "D", label: "D", content: "$(t-2)u(t-2)$" }
    ],
    explanation: "本题考查拉普拉斯逆变换，特别是复频域时移性质。\n\n**解题步骤：**\n1. **分离有理分式**：\n   不考虑指数项，设 $G(s) = \\frac{2s+1}{s^2} = \\frac{2s}{s^2} + \\frac{1}{s^2} = \\frac{2}{s} + \\frac{1}{s^2}$。\n\n2. **基础逆变换**：\n   查表可得：\n   $L^{-1}[\\frac{1}{s}] = u(t) \\Rightarrow L^{-1}[\\frac{2}{s}] = 2u(t)$。\n   $L^{-1}[\\frac{1}{s^2}] = t u(t)$。\n   所以 $g(t) = (2 + t)u(t)$。\n\n3. **应用时移性质**：\n   $F(s) = G(s)e^{-2s}$。\n   根据 $f(t-t_0)u(t-t_0) \\leftrightarrow F(s)e^{-st_0}$，这里 $t_0=2$。\n   原函数 $f(t) = g(t-2)$。\n\n4. **代入计算**：\n   注意是将 $g(t)$ 中的每一个 $t$ 都替换为 $(t-2)$。\n   $f(t) = [2 + (t-2)] u(t-2) = t \\cdot u(t-2)$。\n\n**结论：**\n故正确答案为 B。"
  },
  {
    id: 16,
    content: "已知系统的激励 $e(t)$ 与响应 $r(t)$ 的关系为：$r(t) = e(1-t)$ 则该系统为。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "线性时不变系统" },
      { id: "B", label: "B", content: "线性时变系统" },
      { id: "C", label: "C", content: "非线性时不变系统" },
      { id: "D", label: "D", content: "非线性时变系统" }
    ],
    explanation: "本题考查系统线性和时变性的严格判断。\n\n**解题步骤：**\n1. **判断线性**：\n   设输入 $e(t) = a e_1(t) + b e_2(t)$。\n   系统输出 $r(t) = e(1-t) = a e_1(1-t) + b e_2(1-t)$。\n   而 $a r_1(t) + b r_2(t)$ 也是 $a e_1(1-t) + b e_2(1-t)$。\n   满足叠加原理，故为**线性**。\n\n2. **判断时变性**：\n   先延时，后响应：设输入为 $e_d(t) = e(t-t_0)$。\n   系统的输出是对“整个输入函数”的自变量进行 $1-t$ 操作。\n   $r_{d}(t) = e_d(1-t) = e((1-t)-t_0) = e(1-t-t_0)$。\n\n   先响应，后延时：\n   原响应 $r(t) = e(1-t)$。\n   延时后 $r(t-t_0) = e(1-(t-t_0)) = e(1-t+t_0)$。\n\n   比较发现 $e(1-t-t_0) \\neq e(1-t+t_0)$。\n   系统特性随时间变化，故为**时变**。\n\n**结论：**\n系统是线性时变系统。\n故正确答案为 B。"
  },
  {
    id: 17,
    content: "连续周期信号 $f(t)$ 的频谱 $F(j\\omega)$ 的特点是。",
    correctOptionId: "D",
    options: [
      { id: "A", label: "A", content: "周期、连续频谱" },
      { id: "B", label: "B", content: "周期、离散频谱" },
      { id: "C", label: "C", content: "连续、非周期频谱" },
      { id: "D", label: "D", content: "离散、非周期频谱" }
    ],
    explanation: "本题考查周期信号频谱的基本性质。\n\n**解题分析：**\n1. **离散性**：\n   周期信号可以展开为傅里叶级数，只包含基波及其谐波成分。因此在频率轴上，只有在 $\\omega = n\\omega_0$ 处有冲激（或值），其余位置为 0。所以频谱是**离散**的。\n\n2. **非周期性**：\n   频谱的包络通常随频率增加而衰减，各谐波的幅度由信号波形决定，并不呈现周期性重复（除了离散时间信号的频谱是周期的，这里是连续时间信号）。所以频谱是**非周期**的。\n\n**对比记忆：**\n- 连续周期信号 $\\leftrightarrow$ 离散非周期频谱\n- 离散非周期信号 $\\leftrightarrow$ 连续周期频谱\n\n**结论：**\n故正确答案为 D。"
  },
  {
    id: 18,
    content: "若系统的起始状态为0，在 $x(t)$ 的激励下，所得的响应为。",
    correctOptionId: "D",
    options: [
      { id: "A", label: "A", content: "强迫响应" },
      { id: "B", label: "B", content: "稳态响应" },
      { id: "C", label: "C", content: "暂态响应" },
      { id: "D", label: "D", content: "零状态响应" }
    ],
    explanation: "本题考查响应的分类定义。\n\n**解题分析：**\n1. **全响应分解**：\n   全响应 = 零输入响应 + 零状态响应。\n\n2. **定义辨析**：\n   - **零输入响应**：输入为 0，仅由非零起始状态产生的响应。\n   - **零状态响应**：起始状态为 0，仅由输入激励 $x(t)$ 产生的响应。\n\n3. **题干匹配**：\n   题目明确说明“起始状态为0”，且有“$x(t)$ 的激励”。符合零状态响应的定义。\n\n**结论：**\n故正确答案为 D。"
  },
  {
    id: 19,
    content: "周期序列 $2\\cos(3\\pi n/4 + \\pi/6) + \\sin(\\pi n/4)$ 的周期 N 等于。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "8" },
      { id: "B", label: "B", content: "8/3" },
      { id: "C", label: "C", content: "4" },
      { id: "D", label: "D", content: "$\\pi/4$" }
    ],
    explanation: "本题考查离散信号周期的计算。\n\n**解题步骤：**\n1. **第一部分** $\\cos(3\\pi n/4)$：\n   角频率 $\\omega_1 = 3\\pi/4$。\n   周期 $N_1$ 需满足 $N_1 \\cdot \\frac{3\\pi}{4} = 2\\pi k$。\n   $N_1 = \\frac{8}{3}k$。取最小整数 $k=3$，得 $N_1 = 8$。\n\n2. **第二部分** $\\sin(\\pi n/4)$：\n   角频率 $\\omega_2 = \\pi/4$。\n   周期 $N_2$ 需满足 $N_2 \\cdot \\frac{\\pi}{4} = 2\\pi k$。\n   $N_2 = 8k$。取 $k=1$，得 $N_2 = 8$。\n\n3. **总周期**：\n   $N = LCM(N_1, N_2) = LCM(8, 8) = 8$。\n\n**结论：**\n故正确答案为 A。"
  },
  {
    id: 20,
    content: "已知系统的激励 $e(t)$ 与响应 $r(t)$ 的关系为：$r(t) = e^2(t)$ 则该系统为。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "线性时不变系统" },
      { id: "B", label: "B", content: "线性时变系统" },
      { id: "C", label: "C", content: "非线性时不变系统" },
      { id: "D", label: "D", content: "非线性时变系统" }
    ],
    explanation: "本题考查系统性质判断。\n\n**解题步骤：**\n1. **判断线性**：\n   设输入 $k e(t)$。\n   输出 $r_{new}(t) = (k e(t))^2 = k^2 e^2(t) = k^2 r(t)$。\n   因为 $k^2 r(t) \\neq k r(t)$（不满足齐次性），所以系统是**非线性**的。\n\n2. **判断时变性**：\n   系统方程 $r(t) = e^2(t)$ 中系数为常数，且无显式 $t$。\n   输入延时 $e(t-t_0)$，输出为 $e^2(t-t_0)$，这正好等于 $r(t-t_0)$。\n   所以系统是**时不变**的。\n\n**结论：**\n非线性、时不变系统。\n故正确答案为 C。"
  },
  {
    id: 21,
    content: "已知 Z 变换 $Z[x(n)] = \\frac{1}{1-3z^{-1}}$，收敛域 $|z|>3$，则逆变换 $x(n)$ 为。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "$3^n u(n)$" },
      { id: "B", label: "B", content: "$3^n u(n-1)$" },
      { id: "C", label: "C", content: "$-3^n u(-n)$" },
      { id: "D", label: "D", content: "$-3^{-n} u(-n-1)$" }
    ],
    explanation: "本题考查 Z 变换对及其收敛域（ROC）。\n\n**解题分析：**\n1. **极点识别**：\n   $X(z) = \\frac{1}{1-3z^{-1}} = \\frac{z}{z-3}$。\n   极点位于 $z=3$。\n\n2. **收敛域判别**：\n   题目给定 $|z|>3$，即收敛域在极点圆的外部。\n   这对应于**因果序列**（右边序列）。\n\n3. **公式匹配**：\n   标准变换对：$a^n u(n) \\leftrightarrow \\frac{1}{1-az^{-1}}, |z|>|a|$。\n   这里 $a=3$。\n   所以对应时域序列为 $3^n u(n)$。\n\n   （注：若收敛域为 $|z|<3$，则对应左边序列 $-3^n u(-n-1)$）。\n\n**结论：**\n故正确答案为 A。"
  },
  {
    id: 22,
    content: "已知信号 $f(t) = Sa(100t) + Sa^2(60t)$，则奈奎斯特取样频率 $f_s$ 为。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "$50/\\pi$" },
      { id: "B", label: "B", content: "$120/\\pi$" },
      { id: "C", label: "C", content: "$100/\\pi$" },
      { id: "D", label: "D", content: "$60/\\pi$" }
    ],
    explanation: "本题考查复合信号带宽计算及采样定理。\n\n**解题步骤：**\n1. **分析第一项 $Sa(100t)$**：\n   $Sa(100t) = \\frac{\\sin(100t)}{100t}$。\n   截止角频率 $\\omega_{m1} = 100$ rad/s。\n\n2. **分析第二项 $Sa^2(60t)$**：\n   时域乘积等于频域卷积。\n   $Sa(60t)$ 的带宽为 60 rad/s。\n   平方后，频谱卷积，带宽加倍。\n   截止角频率 $\\omega_{m2} = 60 + 60 = 120$ rad/s。\n\n3. **确定系统最高频率**：\n   相加信号的频谱是两者叠加，最高频率取较大者。\n   $\\omega_m = \\max(100, 120) = 120$ rad/s。\n\n4. **计算奈奎斯特频率**：\n   $\\omega_s \\ge 2\\omega_m = 240$ rad/s。\n   转换为赫兹：$f_s = \\frac{\\omega_s}{2\\pi} = \\frac{240}{2\\pi} = \\frac{120}{\\pi}$ Hz。\n\n**结论：**\n故正确答案为 B。"
  },
  {
    id: 23,
    content: "设当 $t<3$ 时，$x(t)=0$，则使 $x(1-t) + x(2-t) = 0$ 的 $t$ 值为。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "$t>-2$ 或 $t>-1$" },
      { id: "B", label: "B", content: "$t=1$ 和 $t=2$" },
      { id: "C", label: "C", content: "$t>-1$" },
      { id: "D", label: "D", content: "$t>-2$" }
    ],
    explanation: "本题考查信号支撑区间的逻辑运算。\n\n**解题步骤：**\n1. **明确非零条件**：\n   $x(\\tau) \\neq 0$ 的必要条件是 $\\tau \\ge 3$。\n\n2. **分析 $x(1-t)$ 非零区间**：\n   $1-t \\ge 3 \\Rightarrow t \\le -2$。\n\n3. **分析 $x(2-t)$ 非零区间**：\n   $2-t \\ge 3 \\Rightarrow t \\le -1$。\n\n4. **分析“和为零”**：\n   因为一般情况下信号值可能正可能负，但题目考察的是支撑集（Support）。\n   若要 $x(1-t) + x(2-t) = 0$ 恒成立（即在支撑集之外），需要 $t$ 落在两个信号均为 0 的区域。\n   \n   信号 1 在 $t > -2$ 时为 0。\n   信号 2 在 $t > -1$ 时为 0。\n   \n   两个信号**同时**为 0 的区域是两个区域的交集：\n   $(t > -2) \\cap (t > -1) \\Rightarrow t > -1$。\n\n**结论：**\n当 $t > -1$ 时，两项均为 0，和必为 0。\n故正确答案为 C。"
  },
  {
    id: 24,
    content: "信号 $f(t)=Sa(100t)$，其最低取样频率 $f_s$ 为。",
    correctOptionId: "A",
    options: [
      { id: "A", label: "A", content: "$100/\\pi$" },
      { id: "B", label: "B", content: "$200/\\pi$" },
      { id: "C", label: "C", content: "$\\pi/100$" },
      { id: "D", label: "D", content: "$\\pi/200$" }
    ],
    explanation: "本题考查 Sa 函数的带宽与采样。\n\n**解题步骤：**\n1. **确定带宽**：\n   $f(t) = \\frac{\\sin(100t)}{100t}$。\n   其中 $\\sin(100t)$ 决定了最高频率。\n   $\\omega_m = 100$ rad/s。\n\n2. **奈奎斯特采样率**：\n   $\\omega_s \\ge 2\\omega_m = 200$ rad/s。\n\n3. **单位转换**：\n   $f_s = \\frac{\\omega_s}{2\\pi} = \\frac{200}{2\\pi} = \\frac{100}{\\pi}$ Hz。\n\n**结论：**\n故正确答案为 A。"
  },
  {
    id: 25,
    content: "已知 $x(n)$ 的 Z 变换 $X(z) = \\frac{1}{(z+1/2)(z+2)}$，$X(z)$ 的收敛域为时，$x(n)$ 为因果信号。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "$|z|>0.5$" },
      { id: "B", label: "B", content: "$|z|<0.5$" },
      { id: "C", label: "C", content: "$|z|>2$" },
      { id: "D", label: "D", content: "$0.5<|z|<2$" }
    ],
    explanation: "本题考查 Z 变换收敛域与时域因果性的关系。\n\n**解题分析：**\n1. **确定极点**：\n   分母为 $(z+0.5)(z+2)$，极点为 $p_1 = -0.5$ 和 $p_2 = -2$。\n\n2. **因果性判据**：\n   因果序列（右边序列）的 Z 变换收敛域一定是某个圆的**外部**，即 $|z| > R$。\n   为了包含所有极点对应的右边序列项，收敛域必须在**模值最大**的极点之外。\n\n3. **确定半径**：\n   $|p_1| = 0.5$，$|p_2| = 2$。\n   最大模值为 2。\n   所以收敛域为 $|z| > 2$。\n\n**结论：**\n故正确答案为 C。"
  },
  {
    id: 26,
    content: "一个因果稳定的离散系统，其 $H(z)$ 的全部极点须分布在 z 平面的。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "单位圆外" },
      { id: "B", label: "B", content: "单位圆内" },
      { id: "C", label: "C", content: "单位圆上" },
      { id: "D", label: "D", content: "单位圆内或单位圆上" }
    ],
    explanation: "本题考查离散系统的稳定性与极点位置关系。\n\n**解题逻辑：**\n1. **因果系统**：\n   收敛域为 $|z| > |p_{max}|$（最外极点的外部）。\n\n2. **稳定系统**：\n   系统稳定要求单位脉冲响应 $h(n)$ 绝对可和，这等价于 Z 变换的收敛域**包含单位圆**（$|z|=1$）。\n\n3. **综合条件**：\n   要使 $|z| > |p_{max}|$ 这个区域包含 $|z|=1$，必须满足 $|p_{max}| < 1$。\n   即所有极点的模都必须小于 1。\n\n**结论：**\n极点必须全部分布在单位圆内。\n故正确答案为 B。"
  },
  {
    id: 27,
    content: "设当 $n<-2$ 和 $n>4$ 时，$x(n)=0$，则序列 $x(-n-2)$ 为零的 $n$ 值为。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "$n>0$" },
      { id: "B", label: "B", content: "$n>0$ 和 $n<-6$" },
      { id: "C", label: "C", content: "$n=-2$ 和 $n>0$" },
      { id: "D", label: "D", content: "$n=-2$" }
    ],
    explanation: "本题考查离散序列的复合变量变换。\n\n**解题步骤：**\n1. **确定原信号支撑集**：\n   $x(k) \\neq 0$ 仅当 $-2 \\le k \\le 4$。\n\n2. **建立映射关系**：\n   设 $y(n) = x(-n-2)$。\n   令 $k = -n-2$。则 $y(n)$ 非零时满足 $-2 \\le -n-2 \\le 4$。\n\n3. **求解不等式**：\n   $-2 \\le -n-2 \\Rightarrow 0 \\le -n \\Rightarrow n \\le 0$。\n   $-n-2 \\le 4 \\Rightarrow -n \\le 6 \\Rightarrow n \\ge -6$。\n   所以非零区间为 $[-6, 0]$。\n\n4. **确定为零区域**：\n   补集即为零。\n   $n < -6$ 或 $n > 0$。\n\n**结论：**\n故正确答案为 B。"
  },
  {
    id: 28,
    content: "已知系统的系统函数为 $H(s) = \\frac{s+2}{s(s^2+3s+2)}$，求系统的自然频率为。",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "-1, -2" },
      { id: "B", label: "B", content: "0, -1, -2" },
      { id: "C", label: "C", content: "0, -1" },
      { id: "D", label: "D", content: "-2" }
    ],
    explanation: "本题考查系统自然频率的概念。\n\n**解题分析：**\n1. **定义**：\n   系统的自然频率（固有频率/模态）由系统特征方程的根决定，也就是 $H(s)$ 分母多项式的根。\n\n2. **分析分母**：\n   $D(s) = s(s^2+3s+2) = s(s+1)(s+2)$。\n\n3. **求根**：\n   令 $D(s)=0$，解得 $s_1 = 0$, $s_2 = -1$, $s_3 = -2$。\n\n4. **零极点抵消问题**：\n   虽然分子也有 $(s+2)$，导致传递函数最简形式为 $\\frac{1}{s(s+1)}$，但在考察“系统”的自然频率时，通常指系统内部状态的模态。如果未指明是最小实现或可控可观部分，所有分母根均应视为自然频率。特别是在考题中，除非明确提到“最小实现”或“外部特性”，否则不应抵消。\n   （此外，即便抵消，$s=-2$ 也是系统原有的自然模态，只是不可观测/不可控而已）。\n   结合选项，B 选项包含了所有根，是最完整的描述。\n\n**结论：**\n故正确答案为 B。"
  },
  {
    id: 29,
    content: "已知 $x(n)$ 的 Z 变换 $X(z) = \\frac{1}{(z+1)(z+2)}$，$X(z)$ 的收敛域为时，$x(n)$ 为因果信号。",
    correctOptionId: "C",
    options: [
      { id: "A", label: "A", content: "$|z|>1$" },
      { id: "B", label: "B", content: "$|z|<1$" },
      { id: "C", label: "C", content: "$|z|>2$" },
      { id: "D", label: "D", content: "$1<|z|<2$" }
    ],
    explanation: "本题考查 Z 变换收敛域。\n\n**解题分析：**\n1. **极点**：\n   $p_1 = -1, p_2 = -2$。\n   模值分别为 1 和 2。\n\n2. **因果性**：\n   因果信号 $\\Leftrightarrow$ 右边序列 $\\Leftrightarrow$ 收敛域在最外侧极点之外。\n\n3. **确定范围**：\n   最外侧极点模值为 2。\n   所以 ROC 为 $|z| > 2$。\n\n**结论：**\n故正确答案为 C。"
  },
  {
    id: 30,
    content: "下列各表达式中正确的是",
    correctOptionId: "B",
    options: [
      { id: "A", label: "A", content: "$\\delta(2t) = \\delta(t)$" },
      { id: "B", label: "B", content: "$\\delta(2t) = \\frac{1}{2}\\delta(t)$" },
      { id: "C", label: "C", content: "$\\delta(2t) = 2\\delta(t)$" },
      { id: "D", label: "D", content: "$2\\delta(t) = \\frac{1}{2}\\delta(2t)$" }
    ],
    explanation: "本题考查冲激函数的尺度变换性质。\n\n**解题公式：**\n$\\delta(at) = \\frac{1}{|a|}\\delta(t)$。\n\n**解题步骤：**\n1. **识别参数**：\n   题中 $a=2$。\n\n2. **代入公式**：\n   $\\delta(2t) = \\frac{1}{|2|}\\delta(t) = \\frac{1}{2}\\delta(t)$。\n\n3. **检查选项**：\n   A 错。\n   B 正确。\n   C 错。\n   D 变形为 $\\delta(2t) = 4\\delta(t)$，错。\n\n**结论：**\n故正确答案为 B。"
  }
];