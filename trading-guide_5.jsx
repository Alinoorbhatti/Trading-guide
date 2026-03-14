import { useState } from "react";

const sections = [
  { id: "foundations", label: "Foundations" },
  { id: "spot", label: "Spot Trading" },
  { id: "futures", label: "Futures" },
  { id: "technical", label: "Technical Analysis" },
  { id: "math", label: "The Math" },
  { id: "risk", label: "Risk Management" },
  { id: "daytrading", label: "Day Trading" },
  { id: "psychology", label: "Psychology" },
  { id: "edge", label: "Building an Edge" },
];

const content = {
  foundations: {
    title: "Foundations of Trading",
    blocks: [
      {
        heading: "What Is a Market?",
        text: `A market is just a place — physical or digital — where buyers and sellers come together to exchange an asset. The price you see at any moment is simply the last price two parties agreed on. Nothing more.

Markets exist for stocks, currencies (forex), commodities (oil, gold), cryptocurrencies, and derivatives (futures, options). As a retail trader, you're operating in the same market as giant banks, hedge funds, and algorithmic systems. Understanding this matters — you are the smallest participant in the room.`,
      },
      {
        heading: "How Price Actually Moves",
        text: `Price moves because of imbalance between buyers and sellers. When more people want to buy than sell, the price goes up until sellers are willing to sell. When sellers overwhelm buyers, price drops.

Every candle on your chart represents this battle in real time. A green (bullish) candle means buyers won that period. A red (bearish) candle means sellers won. The wick shows how far price traveled before being rejected.

This sounds obvious, but most beginners never internalize it. They look for "signals" without understanding the simple supply/demand reality underneath.`,
      },
      {
        heading: "Key Market Participants",
        text: `Retail traders (you): Small accounts, trading from home. Have no market-moving power.

Institutional traders: Banks, hedge funds, pension funds. They move billions. Their orders move markets and create the big waves retail traders try to ride.

Market makers: Entities that provide liquidity. They sit on both sides of the order book and profit from the spread (the gap between buy and sell price). They are NOT your enemy — they're running a business.

Algorithms (algos): Automated systems executing strategies at high speed. They make up 70%+ of daily volume in most markets. The "weird" price movements you see? Often algos.`,
      },
      {
        heading: "Bid, Ask, and Spread",
        text: `The bid is the highest price a buyer will pay. The ask is the lowest price a seller will accept. The spread is the difference.

Example: EUR/USD bid = 1.08500, ask = 1.08502. Spread = 0.2 pips.

When you BUY, you pay the ask. When you SELL, you receive the bid. This means you start every trade slightly in the red — the spread is an immediate cost. In liquid markets (EUR/USD, BTC/USD) spreads are tight. In illiquid markets, spreads can eat your profits.

This is why scalpers obsess over spreads. If your target profit is 5 pips and the spread is 2 pips, you need to actually move 7 pips to make 5.`,
      },
      {
        heading: "Types of Orders",
        text: `Market order: Execute immediately at the current best available price. Fast, but you don't control the price. Good for liquid markets.

Limit order: Execute only at your specified price or better. You control price but not execution — the market may never reach your price.

Stop order (stop loss): Becomes a market order when a specific price is hit. Used to exit losing trades automatically.

Stop-limit order: Becomes a limit order (not market) when triggered. Risky in fast markets — can fail to execute.

OCO (One Cancels Other): Two orders simultaneously. When one fills, the other is cancelled. Useful for setting take profit and stop loss at the same time.`,
      },
      {
        heading: "Timeframes",
        text: `Every chart has a timeframe — each candle represents one unit of time.

1m, 5m, 15m: Used by scalpers and day traders for entry precision.
1H, 4H: The most popular for swing trading and higher timeframe analysis.
Daily (1D): The gold standard. Every serious trader watches the daily chart.
Weekly, Monthly: For understanding the macro trend. Where are we in the big picture?

The rule most professionals use: Do your analysis on a higher timeframe, execute on a lower timeframe. Identify the trend on the 4H. Enter on the 15m or 5m. This gives you the big picture context while giving you a precise entry.`,
      },
    ],
  },
  spot: {
    title: "Spot Trading",
    blocks: [
      {
        heading: "What Is Spot Trading?",
        text: `Spot trading means buying or selling an asset for immediate delivery at the current market price — the "spot price." You own the actual asset.

If you buy 1 BTC on a crypto exchange, you own 1 BTC. If you buy 100 shares of Apple, you own those shares. This is the simplest form of trading and where most beginners should start.

No expiry. No leverage (unless you use margin). No daily funding fees. Just the asset.`,
      },
      {
        heading: "Going Long vs Going Short",
        text: `Long: You buy an asset expecting it to go up. You profit when price rises. This is what most people understand — "buy low, sell high."

Short: You borrow an asset, sell it at the current price, then buy it back later at a (hopefully) lower price. The difference is your profit.

Short selling example:
- Borrow 1 BTC at $60,000, sell it immediately
- Price drops to $50,000
- Buy 1 BTC at $50,000 and return it
- Profit: $10,000 (minus fees and interest)

Short selling is more complex and riskier — your downside is theoretically unlimited if the price rises instead of falling.

In pure spot markets (no margin), you can only go long. To short, you need a margin account or derivatives.`,
      },
      {
        heading: "Spot Market Structure",
        text: `Order book: A live list of all buy and sell orders waiting to be filled. The left side is bids (buyers), the right side is asks (sellers). The depth of the order book tells you the liquidity at each price level.

Support and resistance from order books: Large buy orders create "walls" that support price. Large sell orders create resistance. Watch for these on the DOM (Depth of Market).

Volume: The number of units traded in a period. High volume confirms moves. Low volume moves are more likely to reverse. A breakout on low volume is suspicious. A breakout on 3x average volume is meaningful.`,
      },
      {
        heading: "Spot Trading Costs",
        text: `Maker fee: You place a limit order that sits in the order book. You're "making" liquidity. Exchanges reward this with lower fees — typically 0.1% or less.

Taker fee: You place a market order that instantly fills against existing orders. You're "taking" liquidity. Slightly higher fees — typically 0.1% to 0.25%.

On $10,000 trade: A 0.1% fee = $10 cost. Two trades (entry and exit) = $20 in fees. Your trade needs to make more than $20 just to break even. This is why fee awareness matters, especially for frequent traders.

Also factor in: slippage (the difference between expected price and actual fill price — worse in illiquid markets or with large orders).`,
      },
    ],
  },
  futures: {
    title: "Futures Trading",
    blocks: [
      {
        heading: "What Is a Futures Contract?",
        text: `A futures contract is an agreement to buy or sell an asset at a predetermined price on a specific future date. You're not buying the asset — you're buying a contract.

Originally, futures were created for farmers and commodity companies to hedge price risk. A wheat farmer could lock in a selling price months before harvest. A bread company could lock in a buying price. Speculation came later.

Today, futures exist for: stock indices (S&P 500, Nasdaq), commodities (crude oil, gold, corn), currencies, interest rates, and crypto (CME Bitcoin futures, perpetual futures on crypto exchanges).`,
      },
      {
        heading: "Perpetual Futures (Crypto)",
        text: `Traditional futures have an expiry date. Perpetual futures (invented for crypto) never expire. They're the most traded instrument in crypto markets by volume.

The magic mechanism keeping perp prices aligned with spot prices is the funding rate.

Funding rate: Every 8 hours (on most exchanges), traders on the winning side pay traders on the losing side.

If most people are long (bullish), longs pay shorts. This discourages excessive speculation in one direction and keeps the perp price close to spot.

Positive funding rate = market is net long = longs are paying shorts. Extremely high positive funding = crowded long trade = potential for a "long squeeze."

Negative funding rate = market is net short = shorts are paying longs. Extremely negative funding = potential for a "short squeeze."

Funding rate is one of the best sentiment indicators you have access to.`,
      },
      {
        heading: "Leverage Explained",
        text: `Leverage lets you control a larger position than your actual capital. A 10x leverage means $1,000 controls a $10,000 position.

If the price moves 1% in your favor: profit = $10,000 × 1% = $100. That's a 10% return on your $1,000.
If the price moves 1% against you: loss = $100. Still 10% of your capital gone.

Liquidation: The price at which the exchange forcibly closes your position because your losses have eaten through your margin. With 10x leverage, a 10% adverse move = liquidation (approximately, after fees).

The math:
Liquidation price (long) = Entry Price × (1 - 1/Leverage)
Liquidation price (short) = Entry Price × (1 + 1/Leverage)

Example: You long BTC at $60,000 with 10x leverage.
Liquidation ≈ $60,000 × (1 - 0.1) = $54,000

A 10% drop wipes your position. BTC moves 10% in a day regularly.

High leverage is not a tool for making more money. It's a tool for destroying accounts faster.`,
      },
      {
        heading: "Margin Types",
        text: `Cross margin: Your entire account balance is used as margin for all open positions. Positions share the same collateral. If one trade goes badly, it can eat into margin for your other trades. Liquidation point is more flexible but losses can be larger.

Isolated margin: Each position gets its own fixed margin. If that position gets liquidated, you only lose that margin — not your whole account. Recommended for beginners.

Initial margin: The minimum required to open a position.
Maintenance margin: The minimum required to keep a position open. If your account falls below this, you get a margin call or liquidation.`,
      },
      {
        heading: "Long and Short Squeeze",
        text: `Long squeeze: Price drops sharply, triggering stop losses and liquidations from long traders. Those forced sell orders push price down further, triggering more liquidations. A cascade. The drop is amplified by leverage.

Short squeeze: Price rises sharply, forcing short sellers to buy back their positions to cover losses. Their buying pushes price higher, forcing more shorts to close. A violent upward cascade. GameStop 2021 was a famous example.

Squeeze events are some of the biggest price moves you'll see. They're predictable to an extent — when funding is extremely one-sided and price has been consolidating, a squeeze in the opposite direction is more likely.`,
      },
      {
        heading: "Basis and Contango/Backwardation",
        text: `Basis: The difference between the futures price and the spot price.

Contango: Futures price > Spot price. The market expects the price to rise (or is pricing in carry costs). Normal in most markets.

Backwardation: Futures price < Spot price. The market is willing to pay a premium for the asset right now. Often signals supply scarcity or very strong near-term demand.

In crypto, when perpetual futures consistently trade at a premium to spot, it means leverage traders are overwhelmingly bullish. When the premium is extreme, it's often a contrarian sell signal.`,
      },
    ],
  },
  technical: {
    title: "Technical Analysis",
    blocks: [
      {
        heading: "The Core Idea",
        text: `Technical analysis (TA) is the study of price action and volume to forecast future price movement. The underlying assumption: all known information is already reflected in the price, and patterns tend to repeat because human psychology is consistent.

Does TA work? Somewhat. The patterns are real — they reflect genuine crowd psychology. But TA is probabilistic, not certain. A "perfect" setup fails 30-40% of the time. The goal is not to predict perfectly but to find situations where the probability tips in your favor.`,
      },
      {
        heading: "Support and Resistance",
        text: `Support: A price level where buying pressure is strong enough to stop price from falling further. Price has bounced here before. Buyers remember this level and step in.

Resistance: A price level where selling pressure is strong enough to stop price from rising. Price has been rejected here before. Sellers step back in.

Key insight: Once broken, support becomes resistance (and vice versa). This is called a "flip." A level where price previously bounced (support) becomes a ceiling after being broken.

The more times a level has been tested, the stronger it is — and also, the more likely it eventually breaks, because each test absorbs more orders from the order book.`,
      },
      {
        heading: "Trend Analysis",
        text: `An uptrend is defined by higher highs (HH) and higher lows (HL). Each push up goes higher than the last. Each pullback stays higher than the last pullback.

A downtrend is defined by lower highs (LH) and lower lows (LL).

A trend reversal is signaled when this structure breaks. In an uptrend, if price makes a lower low (drops below the previous pullback), the uptrend structure is broken. This is called a "break of structure" or "market structure shift."

The simplest and most powerful trading rule: trade with the trend. Higher probability, larger moves in your favor.`,
      },
      {
        heading: "Candlestick Patterns",
        text: `Doji: Open and close are almost the same. The market is indecisive. After a strong trend, a doji signals a potential reversal.

Hammer: Small body, long lower wick. Price dropped hard intracandle but buyers pushed it back up. Bullish reversal signal, especially at support.

Shooting star: Small body, long upper wick. Price rallied hard but sellers pushed it back down. Bearish reversal signal, especially at resistance.

Engulfing: A candle that completely "engulfs" the previous candle's body. Bullish engulfing (green engulfs red) at a low = strong reversal signal. Bearish engulfing (red engulfs green) at a high = strong reversal signal.

Remember: a single candle is not a signal. It's context. A hammer at a strong support level on high volume is meaningful. A hammer in the middle of nowhere is noise.`,
      },
      {
        heading: "Moving Averages",
        text: `A moving average (MA) smooths out price data to show the underlying trend.

SMA (Simple Moving Average): The average of the last N closing prices. Equal weight to all.
EMA (Exponential Moving Average): Gives more weight to recent prices. Reacts faster to price changes.

Common settings:
20 EMA: Short-term trend. Often acts as dynamic support in uptrends.
50 MA: Medium-term trend. Widely watched institutional level.
200 MA: Long-term trend. THE most watched level. Price above 200 MA = bullish regime. Below = bearish regime.

Golden cross: 50 MA crosses above 200 MA. Bullish signal.
Death cross: 50 MA crosses below 200 MA. Bearish signal.

Limitation: Moving averages are lagging — they tell you what happened, not what will happen. Use them as context, not as standalone signals.`,
      },
      {
        heading: "RSI (Relative Strength Index)",
        text: `RSI measures the speed and magnitude of price changes. Scale of 0 to 100.

Above 70 = overbought. Market has risen quickly. Potential reversal territory.
Below 30 = oversold. Market has fallen quickly. Potential bounce territory.

But here's what most beginners miss: in a strong uptrend, RSI can stay "overbought" for weeks. In a crash, it can stay "oversold" for days. Don't blindly sell because RSI hits 70.

Better uses of RSI:
RSI divergence: Price makes a new high, but RSI makes a lower high. Hidden weakness. Price often reverses. Same in reverse for bottoms.
RSI support/resistance: RSI levels where it has historically bounced or been rejected.`,
      },
      {
        heading: "Volume Profile",
        text: `Volume profile shows how much volume was traded at each price level over a period. Instead of time on the x-axis, it's volume on the y-axis.

POC (Point of Control): The price level with the highest traded volume. This is the "fair value" area where the market spent most time. Price tends to revisit the POC.

High Volume Node (HVN): Areas of heavy trading. Price tends to slow down and consolidate here.

Low Volume Node (LVN): Areas of light trading. Price moves through these quickly — they're "empty" zones. When price breaks through an LVN, it can move fast until it hits the next HVN.

This is more powerful than regular support/resistance because it's based on actual traded volume, not just visual price levels.`,
      },
    ],
  },
  math: {
    title: "The Math of Trading",
    blocks: [
      {
        heading: "Risk-Reward Ratio (RRR)",
        text: `Risk-reward ratio compares how much you risk on a trade vs how much you stand to gain.

If you risk $100 to make $200, your RRR is 1:2.
If you risk $100 to make $100, your RRR is 1:1.
If you risk $200 to make $100, your RRR is 2:1 (terrible).

Minimum acceptable RRR for most strategies: 1:1.5 or better. Aim for 1:2 or 1:3.

Why this matters: Even if you're only right 40% of the time, a 1:2 RRR makes you profitable.

Proof:
10 trades × 40% win rate = 4 wins, 6 losses
4 wins × $200 profit = $800
6 losses × $100 loss = $600
Net: +$200 profit

You were WRONG more than half the time and still made money. This is why RRR matters more than win rate.`,
      },
      {
        heading: "Expectancy",
        text: `Expectancy tells you the average amount you can expect to make per trade with your strategy.

Formula:
Expectancy = (Win Rate × Average Win) - (Loss Rate × Average Loss)

Example:
Win rate: 50%
Average win: $150
Loss rate: 50%
Average loss: $100

Expectancy = (0.5 × 150) - (0.5 × 100) = 75 - 50 = $25

This means on average, each trade makes you $25. Over 100 trades, that's $2,500 in expected profit.

A strategy with positive expectancy is the foundation of profitable trading. Everything else — psychology, execution, discipline — is about letting that positive expectancy play out over enough trades.

Negative expectancy means no matter how well you control your emotions, you will lose money over time. Fix the strategy first.`,
      },
      {
        heading: "Position Sizing",
        text: `Position sizing is how you determine how many units to buy or sell on any given trade. It's the most important risk management calculation you'll ever do.

The standard rule: Risk no more than 1-2% of your account per trade.

Formula:
Position Size = (Account Balance × Risk %) / (Entry Price - Stop Loss Price)

Example:
Account: $5,000
Risk per trade: 1% = $50
Entry: $100
Stop loss: $95 (5 points away)
Risk per unit: $5

Position size = $50 / $5 = 10 units

You buy 10 units. If stopped out, you lose exactly $50 (1% of account). If it hits your 1:2 target at $110, you make $100.

This is not optional math — this is the difference between surviving long enough to get good and blowing up your account in month one.`,
      },
      {
        heading: "The Kelly Criterion",
        text: `The Kelly Criterion is a formula for finding the optimal percentage of capital to risk per trade to maximize long-term growth.

Formula:
Kelly % = W - [(1 - W) / R]

W = Win rate (decimal)
R = Average win / Average loss ratio

Example:
Win rate: 55% (0.55)
Average win: $200, Average loss: $100 → R = 2

Kelly % = 0.55 - [(1 - 0.55) / 2] = 0.55 - 0.225 = 0.325 = 32.5%

That means the formula says to risk 32.5% per trade. In practice, this is insane. Professional traders use "fractional Kelly" — typically 1/4 or 1/10 of the Kelly number.

1/4 Kelly here = 8.1% per trade. Still aggressive for most. 1% to 2% per trade is the conservative, survivable approach that lets you play the long game.

The Kelly Criterion's value is less about the number and more about the insight: bet more when your edge is larger, bet less (or not at all) when your edge is small or negative.`,
      },
      {
        heading: "Drawdown and Recovery Math",
        text: `Drawdown = the peak-to-trough decline in your account. If you had $10,000 and it fell to $7,000, your drawdown is 30%.

The brutal math of recovery:

10% loss → need 11.1% gain to recover
20% loss → need 25% gain
30% loss → need 42.9% gain
40% loss → need 66.7% gain
50% loss → need 100% gain
80% loss → need 400% gain

This asymmetry is why capital preservation is the #1 priority. A 50% drawdown doesn't just hurt — it mathematically requires a near-miracle to recover. Traders who blow up and try to "trade their way out" make it worse.

Maximum acceptable drawdown for a retail trader: 20-25%. If you hit that, stop trading, review everything.`,
      },
      {
        heading: "Compounding",
        text: `Compounding is the most powerful force in trading. Small consistent gains, reinvested, grow exponentially.

Formula: Final Balance = Initial × (1 + r)^n
r = return per period, n = number of periods

Starting with $1,000, making 2% per month:
Year 1: $1,000 × (1.02)^12 = $1,268
Year 3: $1,000 × (1.02)^36 = $2,040
Year 5: $1,000 × (1.02)^60 = $3,281
Year 10: $1,000 × (1.02)^120 = $10,765

2% per month turns $1,000 into $10,765 in 10 years without adding a single dollar.

The problem: most people try to make 50% a month. That level of aggression leads to losses that break the compounding chain. Slow, consistent, survivable returns beat aggressive blow-up-and-restart cycles every time.`,
      },
    ],
  },
  risk: {
    title: "Risk Management",
    blocks: [
      {
        heading: "The Golden Rules",
        text: `1. Never risk more than 1-2% of your account on a single trade.
2. Always define your stop loss BEFORE you enter the trade. Not after. Before.
3. The stop loss placement should be based on market structure, not on how much money you're willing to lose.
4. Your position size adjusts to honor both the structure-based stop AND the 1-2% rule.
5. Never move your stop loss further away to avoid getting stopped out. This is how small losses become account-destroying losses.`,
      },
      {
        heading: "Stop Loss Placement",
        text: `The most common mistake: placing a stop loss at an arbitrary dollar amount ("I'll stop out if I lose $50") rather than a logical market level.

A logical stop loss is placed just beyond a level that, if breached, would invalidate your trade idea.

Going long on a bounce from support? Your stop goes just below the support level. If support breaks, your thesis is wrong.

Going long on a breakout? Your stop goes below the breakout level. If price falls back below, the breakout failed.

Then you size your position so that if price hits that stop, you lose exactly 1-2% of your account. This is the right order of operations.`,
      },
      {
        heading: "Take Profit Strategy",
        text: `Option 1: Fixed target. Set a take profit at a specific price level (next resistance, key level). Clean and simple.

Option 2: Trailing stop. Move your stop loss up as price moves in your favor. You never hit a fixed target — you let the trade run until the trend reverses. Captures bigger moves but gives back more profit on the exit.

Option 3: Scale out. Take partial profits at the first target (lock in some gains), move your stop to break-even on the remainder, and let the rest run to a higher target. Best of both worlds.

The mistake beginners make: taking profits too early (fear) and letting losses run too long (hope). Discipline means doing the opposite — cutting losses quickly and letting winners run.`,
      },
      {
        heading: "Correlation Risk",
        text: `If you're trading multiple positions at once, make sure they're not all the same trade in disguise.

Example: You're long BTC, long ETH, and long SOL. That's not three separate trades — it's one bet that crypto goes up, spread across three assets. If the crypto market drops, all three positions lose at the same time. Your actual risk is 3x what you calculated for a single trade.

Check correlations: Are your open positions in highly correlated assets? If yes, reduce sizing on each.

Also: Having 5 open trades doesn't mean you're "diversified." Diversification in trading means your positions have low or negative correlation — when one falls, others aren't necessarily falling too.`,
      },
      {
        heading: "The Daily Loss Limit",
        text: `Professional traders use a daily loss limit — a maximum they allow themselves to lose in a single day. When that limit is hit, they stop trading. Period.

A common rule: 3% daily max loss. If your account is $10,000, you stop for the day after losing $300.

Why? Bad days compound. A losing streak + emotional trading + revenge trading can turn a 3% loss into a 15% loss in one session. The daily limit is a circuit breaker against your own worst impulses.

Related: After 3 consecutive losing days, many professional traders take a mandatory day off. The market will be there tomorrow. Your capital needs protecting from your psychology.`,
      },
    ],
  },
  daytrading: {
    title: "Day Trading Principles",
    blocks: [
      {
        heading: "What Day Trading Actually Is",
        text: `Day trading means opening and closing all positions within the same trading session — no overnight holds. You start the day flat, end the day flat.

The main appeal: no overnight risk. No waking up to a gap against your position.

The real picture: Day trading is the most difficult form of trading. The time compression means less room for error. Commissions and spreads are higher relative to small intraday moves. Algorithms dominate the short timeframe. The statistical reality is that 70-80% of retail day traders lose money over time.

This doesn't mean don't do it. It means go in with eyes open and start with demo trading or very small size.`,
      },
      {
        heading: "The Best Times to Trade",
        text: `Markets have "sessions" — periods of high and low activity.

Forex and global markets:
Asian session (Tokyo): 12:00 AM - 9:00 AM GMT. Lower volatility. Range-bound. Good for range trading, bad for breakouts.
London session: 7:00 AM - 4:00 PM GMT. The highest volume session in forex. Best for trends and breakouts.
New York session: 12:00 PM - 9:00 PM GMT. High volume. Especially volatile during the London-New York overlap (12PM - 4PM GMT).

Stock markets:
First hour (9:30 - 10:30 AM ET): Highest volume and volatility. Big moves happen here. Experienced traders love it, beginners get wrecked.
Middle of day (11:30 AM - 2:00 PM ET): Low volume, choppy. Best to avoid.
Last hour (3:00 - 4:00 PM ET): Volume picks back up. Less chaotic than the open.

Most day traders focus on the first 1-2 hours of the main session. That's where the best setups and volume live.`,
      },
      {
        heading: "Core Day Trading Strategies",
        text: `Trend following: Identify the intraday trend early. Enter on pullbacks to key levels (moving average, support). Ride the trend until it shows signs of ending. Most beginner-friendly.

Breakout trading: Wait for price to consolidate (form a range), then enter when it breaks out of that range with volume. The breakout is your entry, just above resistance or just below support.

Reversal trading: Find overextended moves (price moved too far too fast), wait for exhaustion signals (doji, shooting star, RSI divergence), enter against the trend for a snap-back. Higher skill, higher reward.

Scalping: Many small trades, 1-5 minute charts, holding for minutes. Requires tight spreads, fast execution, extreme discipline. Not recommended until you're already consistently profitable on higher timeframes.`,
      },
      {
        heading: "Pre-Market Routine",
        text: `Serious day traders follow a routine before the market opens. You should know the answer to these questions before the first candle forms:

1. What is the macro trend? (Daily/Weekly chart — bullish or bearish?)
2. What are today's key levels? (Mark yesterday's high/low, major support/resistance, pre-market highs/lows.)
3. Are there any major news events today? (Fed announcements, earnings, CPI data — these cause unpredictable volatility. Consider sitting out or trading smaller.)
4. What is my plan? (What setups am I looking for? What are my entry criteria? Where is my stop, where is my target?)
5. What is my mental state? (Tired? Stressed? Upset? Don't trade. Emotions ruin execution.)

Trading without a pre-market routine is gambling.`,
      },
      {
        heading: "VWAP (Volume Weighted Average Price)",
        text: `VWAP is the average price weighted by volume throughout the day. It resets every trading session.

Why it matters: Institutional traders (banks, funds) use VWAP as a benchmark. They try to buy below VWAP and sell above. This makes it a powerful magnet for price.

Trading rules many day traders use:
Price above VWAP → bullish bias, look for long setups.
Price below VWAP → bearish bias, look for short setups.
First time price tests VWAP from below → often a buy opportunity.
First time price tests VWAP from above → often a short opportunity.

VWAP is one of the most respected and widely-used intraday tools. If you learn nothing else for day trading, learn VWAP.`,
      },
      {
        heading: "Pattern Day Trader Rule (US Stocks)",
        text: `If you trade US stocks with a margin account and make 4 or more day trades within 5 business days, you're classified as a Pattern Day Trader (PDT). This requires maintaining a minimum $25,000 in your account.

No $25k? Workarounds:
- Trade futures (no PDT rule)
- Trade forex (no PDT rule)
- Trade crypto (no PDT rule)
- Trade in a cash account (no PDT rule, but trades settle in 2 days, limiting frequency)
- Use an offshore broker (legal but less regulated)

This rule doesn't apply to traders in Pakistan or most international markets. It's a US-specific regulation.`,
      },
    ],
  },
  psychology: {
    title: "Trading Psychology",
    blocks: [
      {
        heading: "Why Psychology Determines Everything",
        text: `Here's an uncomfortable truth: you can know every pattern, every indicator, every formula — and still lose all your money. Because trading is an emotional minefield, and your brain was not built for it.

Your brain evolved for immediate threats and rewards. Trading operates on delayed gratification and probabilistic thinking. Every instinct you have — to avoid pain (cut winners early), to hope (let losers run), to seek excitement (overtrade) — works against you in the market.

Professional traders say: the strategy is 30% of success. The other 70% is psychology and discipline. This is not an exaggeration.`,
      },
      {
        heading: "The Emotional Cycle",
        text: `Traders go through a predictable emotional cycle that corresponds to market cycles:

Optimism → Excitement → Thrill → Euphoria (market top)
→ Anxiety → Denial → Fear → Desperation → Panic
→ Capitulation → Despondency → Depression (market bottom)
→ Hope → Relief → Optimism (cycle repeats)

The trap: most retail buyers buy at euphoria (everything looks great, news is bullish) and sell at capitulation (can't take the pain anymore, news is terrible). They buy high and sell low by following their emotions.

The counterintuitive truth: when everyone is euphoric, be cautious. When everyone is terrified and selling, that's when the best opportunities emerge.`,
      },
      {
        heading: "The Most Dangerous Emotions",
        text: `FOMO (Fear of Missing Out): Seeing a big move happen without you and jumping in late because you don't want to miss more. This is how you buy the top. Rule: if you missed the move, you missed it. The next setup will come.

Revenge trading: After a loss, the urge to immediately get back in and "make it back." You're emotionally compromised, your judgment is impaired, and you're likely to lose even more. Rule: after any significant loss, step away.

Overconfidence: After a winning streak, you start to believe you "figured out" the market. You increase size, ignore stops, break rules. The market humbles you. Rule: your most dangerous moment is right after your best trade.

Loss aversion: The psychological pain of losing $100 feels roughly twice as bad as the joy of gaining $100. This makes you hold losers too long (hoping they recover) and cut winners too soon (locking in the feeling of a win). Rule: mechanically follow your stop losses and targets.`,
      },
      {
        heading: "The Beginner's Curse",
        text: `Many new traders have a short period of "beginner's luck" — they make some good trades early on, gain confidence, increase their size, and then blow up. This is so common it has a name.

Why it happens: Early wins in trading are often random luck mistaken for skill. Markets can trend strongly, and a new trader who happened to be long in a bull run thinks they're good. When market conditions change, their "strategy" (which was really just buying randomly in a bull market) stops working, but they've already sized up based on false confidence.

The fix: Track your trades in a journal from day one. Track win rate, average win/loss, the conditions you traded in. Look for actual edge, not just profitable months.`,
      },
      {
        heading: "Building Mental Discipline",
        text: `Pre-trade checklist: Before any trade, run through your criteria. Does this setup meet my rules? Where is my stop? Where is my target? What is my size? If you can't answer all three, don't trade.

Trade journal: Log every trade. Entry, exit, size, reason for entry, what you were thinking, what happened. Review weekly. Patterns in your mistakes will become obvious.

Meditation and physical health: This sounds soft, but it's real. Sleep-deprived, stressed traders make worse decisions. Exercise, sleep, and mindfulness practices directly improve trading performance. The market doesn't care if you're having a bad day.

Detachment: The best traders think in probabilities, not outcomes. They know any single trade can lose — even the best setup fails sometimes. They don't judge their skill by one trade. They judge over 50-100 trades. This detachment is what separates professionals from gamblers.`,
      },
      {
        heading: "The Discipline Paradox",
        text: `The hardest discipline in trading is NOT being in a trade.

Most retail traders feel like they need to always be doing something. They sit at the charts and after 30 minutes of no "signal," they manufacture one. This is called overtrading, and it's one of the top account killers.

Professional traders will sometimes wait days for the right setup. They understand that NOT trading when conditions aren't right IS a trade — it's protecting your capital for when conditions are favorable.

The goal is not to make as many trades as possible. The goal is to find the highest-quality setups and execute those perfectly. Quality over quantity. Always.`,
      },
    ],
  },
  edge: {
    title: "Building a Real Edge",
    blocks: [
      {
        heading: "What Is an 'Edge'?",
        text: `An edge is a set of conditions under which your probability of making a profitable trade is statistically higher than chance.

Without an edge, trading is gambling. The market has no obligation to give you money because you watched a YouTube tutorial.

An edge can come from:
- A specific pattern that historically resolves in your favor (backtested, not imagined)
- Information (not insider info — just reading order flow better than others)
- Speed and execution (rare for retail)
- Superior risk management (surviving long enough for your edge to play out)

Most beginners don't have an edge. They have a feeling. Feelings are not edges.`,
      },
      {
        heading: "Backtesting",
        text: `Backtesting means testing your strategy on historical price data to see if it would have been profitable in the past.

How to backtest manually:
1. Define your rules precisely. "I buy when the 20 EMA crosses the 50 EMA on the 1H chart, with RSI above 50, and stop below the previous swing low."
2. Go back through charts. Find every instance where your rules triggered.
3. Record the outcome of each trade as if you had taken it.
4. Calculate: win rate, average win, average loss, expectancy, max drawdown.

If the backtested expectancy is positive, the strategy has historical merit. If not, change the rules or abandon the strategy.

Important caveat: Past performance doesn't guarantee future results. Markets change. But a strategy that has never worked historically has no reason to work in the future either.`,
      },
      {
        heading: "Forward Testing (Paper Trading)",
        text: `After backtesting, forward test — trade in real time but without real money. Most major platforms (TradingView, Binance testnet, Webull paper trading) have paper trading features.

Paper trade for at least 50-100 trades before using real money. This lets you verify your backtested edge holds in live conditions, build the habit of following your rules, and work out execution issues without paying for them.

The most important rule: treat paper trading exactly like real trading. Same size, same rules, same discipline. If you can't follow your rules with fake money, you won't follow them with real money when your emotions are fully engaged.`,
      },
      {
        heading: "Starting Small with Real Money",
        text: `When you finally go live, start with the smallest amount you're willing to lose entirely. Not $10,000. Not even $1,000 if you're new. Start with $100-$500.

Why? Because real money produces real emotions that paper trading never fully simulates. Your first real stop loss hit will feel very different from a paper stop. Your first real win will produce real euphoria. You need to experience this at low stakes while the stakes are low enough to be educational rather than destructive.

Only scale up after you're profitable over 3+ months of real trading. Not days. Not weeks. Months. Anyone can have a good week. Consistent profitability over months is the real signal that your edge is real.`,
      },
      {
        heading: "The Brutal Truth",
        text: `70-80% of retail traders lose money. This is a documented fact across multiple studies of broker account data.

The main reasons:
1. No real edge (strategy not backtested, based on vibes)
2. Poor risk management (too large, no stop losses)
3. Emotional trading (overtrading, revenge trading, FOMO)
4. Insufficient capital (needing to make huge % returns to get meaningful dollar gains — which requires risk that ruins you)
5. Transaction costs (fees and spread eating into small account gains)

None of this means you will definitely fail. It means the path to success requires treating this like a serious skill with real study time, not a quick way to make money.

The traders in the top 20% who are consistently profitable share common traits: they have a tested edge, they manage risk religiously, they have emotional discipline, and they treat losses as tuition rather than failures.

Trading is a craft. Like medicine, engineering, or professional sports — it takes years to get genuinely good. The ones who make it are the ones who stayed disciplined long enough.`,
      },
    ],
  },
};

export default function TradingGuide() {
  const [active, setActive] = useState("foundations");
  const [openBlock, setOpenBlock] = useState(null);
  const current = content[active];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0a0a0f", minHeight: "100vh", color: "#e8e6df" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d1117 0%, #111827 100%)",
        borderBottom: "1px solid #1e2a3a",
        padding: "2rem 2rem 1.5rem",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#4a7fa5", marginBottom: 8, fontFamily: "monospace" }}>
            Complete Retail Trading Reference
          </div>
          <h1 style={{ margin: 0, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, color: "#f0ece0", lineHeight: 1.2 }}>
            Everything About Trading
          </h1>
          <p style={{ margin: "0.6rem 0 0", color: "#7a8a96", fontSize: 14, fontFamily: "monospace" }}>
            Spot · Futures · Day Trading · Math · Psychology · Edge
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0 }}>
        {/* Sidebar Nav */}
        <div style={{
          width: 180,
          flexShrink: 0,
          padding: "1.5rem 0",
          borderRight: "1px solid #1a2332",
          position: "sticky",
          top: 0,
          height: "calc(100vh - 100px)",
          overflowY: "auto",
        }}>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => { setActive(s.id); setOpenBlock(null); }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "0.65rem 1.25rem",
                background: active === s.id ? "#13223a" : "transparent",
                color: active === s.id ? "#7ab8e8" : "#8a9aaa",
                border: "none",
                borderLeft: active === s.id ? "2px solid #4a7fa5" : "2px solid transparent",
                cursor: "pointer",
                fontSize: 13,
                fontFamily: "monospace",
                letterSpacing: 0.5,
                transition: "all 0.15s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: "2rem 2rem 4rem 2rem", minWidth: 0 }}>
          <h2 style={{
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontWeight: 700,
            color: "#d4c9a8",
            marginTop: 0,
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid #1e2a3a",
          }}>
            {current.title}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {current.blocks.map((block, i) => {
              const isOpen = openBlock === i;
              return (
                <div key={i} style={{
                  background: isOpen ? "#0f1a26" : "#0d1520",
                  border: `1px solid ${isOpen ? "#2a4060" : "#151f2e"}`,
                  borderRadius: 8,
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}>
                  <button
                    onClick={() => setOpenBlock(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem 1.25rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: isOpen ? "#a8c8e8" : "#c8bfa8",
                      fontSize: "clamp(0.9rem, 2vw, 1rem)",
                      fontWeight: 600,
                      fontFamily: "'Georgia', serif",
                    }}
                  >
                    <span>{block.heading}</span>
                    <span style={{ fontSize: 18, color: "#4a7fa5", flexShrink: 0, marginLeft: 16 }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: "0 1.25rem 1.25rem",
                      borderTop: "1px solid #1a2a3a",
                    }}>
                      {block.text.split("\n\n").map((para, j) => (
                        <p key={j} style={{
                          margin: "0.9rem 0 0",
                          lineHeight: 1.8,
                          color: "#b8b0a0",
                          fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                          fontFamily: "'Georgia', serif",
                        }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section progress dots */}
          <div style={{ display: "flex", gap: 6, marginTop: "2rem", flexWrap: "wrap" }}>
            {sections.map(s => (
              <div
                key={s.id}
                onClick={() => { setActive(s.id); setOpenBlock(null); }}
                style={{
                  width: 8, height: 8,
                  borderRadius: "50%",
                  background: active === s.id ? "#4a7fa5" : "#1e2a3a",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
