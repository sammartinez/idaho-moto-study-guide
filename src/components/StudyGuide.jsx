import { useState } from 'react'

const TABS = [
  { id: 'fees', label: 'Fees & Licensing' },
  { id: 'gear', label: 'Gear & Equipment' },
  { id: 'controls', label: 'Bike Controls' },
  { id: 'lanes', label: 'Lane Positions' },
  { id: 'braking', label: 'Braking' },
  { id: 'hazards', label: 'Hazards' },
  { id: 'sipde', label: 'S.I.P.D.E.' },
  { id: 'laws', label: 'Idaho Laws' },
  { id: 'flash', label: '⚡ Flash Cards' },
]

function Card({ dot = 'blue', title, children }) {
  const dotClass = `card-dot dot-${dot}`
  return (
    <div className="card">
      <div className="card-header">
        <div className={dotClass} />
        <div className="card-title-text">{title}</div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  )
}

function FactRow({ label, val }) {
  return (
    <div className="fact-row">
      <span className="fact-label">{label}</span>
      <span className="fact-val">{val}</span>
    </div>
  )
}

function Callout({ type = 'info', children }) {
  return <div className={`callout callout-${type}`}>{children}</div>
}

function Step({ num, children }) {
  return (
    <div className="step">
      <div className="step-num">{num}</div>
      <div className="step-text">{children}</div>
    </div>
  )
}

// ---- SECTIONS ----

function FeesSection() {
  return (
    <>
      <h3 className="section-head">Fees, Permits &amp; Endorsements</h3>
      <Card dot="blue" title="Fee Schedule">
        <FactRow label="Motorcycle 'M' endorsement" val="$15.00 — one-time fee" />
        <FactRow label="Instruction permit" val="$15.00 — valid 180 days" />
        <FactRow label="Skills test" val="$25.00 — paid to examiner" />
        <FactRow label="Knowledge test" val="$5.00 — paid to county" />
        <FactRow label="Retesting wait period" val="3 days after failing either test" />
      </Card>
      <Card dot="green" title="Instruction Permit Rules">
        <p style={{ marginBottom: 10 }}>Must pass the knowledge test before receiving a permit. Renewable once if original test was within 12 months.</p>
        <p style={{ marginBottom: 8, fontWeight: 600, color: 'var(--text)' }}>Three restrictions on the permit:</p>
        <div>
          <span className="pill pill-red">Daylight riding only</span>
          <span className="pill pill-red">No freeway riding</span>
          <span className="pill pill-red">No passengers</span>
        </div>
        <Callout type="tip"><strong>Tip:</strong> If you pass the skills test while the permit is still valid, the fee is waived when you add the M endorsement.</Callout>
      </Card>
      <Card dot="amber" title="Under 21 Requirements">
        Anyone under 21 must pass the knowledge test AND successfully complete an approved motorcycle rider training course. Completing an approved course waives the skills test requirement (within 25 months).
      </Card>
      <Card dot="purple" title="Insurance Minimums">
        <FactRow label="1 person, 1 accident" val="$25,000 bodily injury" />
        <FactRow label="2+ persons, 1 accident" val="$50,000 bodily injury" />
        <FactRow label="Property damage" val="$15,000" />
      </Card>
    </>
  )
}

function GearSection() {
  return (
    <>
      <h3 className="section-head">Required Gear &amp; Motorcycle Equipment</h3>
      <Card dot="red" title="Helmet Law">
        Idaho law requires anyone <strong>under 18</strong> to wear a DOT-compliant helmet on or off highway. For all riders, helmeted motorcyclists are <strong>3× more likely to survive</strong> head injuries. The single most important thing you can do to survive a crash is wear a securely-fastened, DOT-compliant helmet.
        <Callout type="warning"><strong>Crash facts:</strong> Most crashes happen on short rides under 5 miles. Most occur at under 30 mph. At those speeds, helmets cut injury count and severity by half.</Callout>
      </Card>
      <Card dot="blue" title="Eye & Face Protection">
        <FactRow label="Best protection" val="Shatter-resistant face shield" />
        <FactRow label="Eyes only" val="Goggles (not full face)" />
        <FactRow label="NOT a substitute" val="Windshield, eyeglasses, sunglasses" />
        <FactRow label="Tinted protection" val="Never at night or low-light conditions" />
      </Card>
      <Card dot="green" title="Required Motorcycle Equipment (Idaho)">
        <FactRow label="Headlight — under 25 mph" val="Illuminate 100 ft ahead" />
        <FactRow label="Headlight — 25–34 mph" val="Illuminate 200 ft ahead" />
        <FactRow label="Headlight — 35 mph+" val="Illuminate 300 ft ahead" />
        <FactRow label="Taillight" val="Red, visible 500 ft to the rear" />
        <FactRow label="Brake light" val="Red/amber, visible 100 ft in sunlight" />
        <FactRow label="Mirror" val="Must show 200 ft to the rear" />
        <FactRow label="Horn" val="Audible from at least 200 ft" />
        <FactRow label="Turn signals" val="White/amber front, red/amber rear — 100 ft" />
        <FactRow label="Passenger seat" val="Must be permanently attached" />
        <FactRow label="Passenger footrests" val="Required to carry a passenger" />
        <Callout type="danger"><strong>Not required:</strong> An odometer is NOT on the required equipment list. Know what IS required — this is a common test trap.</Callout>
      </Card>
      <Card dot="amber" title="Visibility Clothing Tips">
        Bright colors (orange, red, yellow, white) are far better than dark. <strong>Retro-reflective material</strong> is the best choice — it reflects light back to the source and works day and night. Black is hard to see in daytime and invisible at night. Your body is half of the visible surface of the rider/motorcycle unit.
      </Card>
    </>
  )
}

function ControlsSection() {
  return (
    <>
      <h3 className="section-head">Motorcycle Controls &amp; Basic Operation</h3>
      <Card dot="blue" title="Gear Pattern">
        <p style={{ marginBottom: 10 }}>The typical gear pattern is: <strong>1 — N — 2 — 3 — 4 — 5</strong></p>
        <p>Neutral is found by a "half lift" from 1st gear or a "half press" from 2nd gear. Remain in <strong>1st gear while stopped</strong> so you can move quickly if needed.</p>
        <Callout type="tip"><strong>Upshifting (3 steps):</strong> Roll off throttle + squeeze clutch → Lift shift lever firmly → Ease out clutch and roll on throttle.</Callout>
        <Callout type="tip"><strong>Downshifting (3 steps):</strong> Roll off throttle + squeeze clutch → Press shift lever down → Ease out clutch as you roll on throttle. Release clutch more slowly when downshifting to avoid jerking.</Callout>
      </Card>
      <Card dot="green" title="The Friction Zone">
        The area of clutch travel where the engine's power <strong>begins to transmit</strong> to the rear wheel. Using it allows smooth and precise control of engine power, especially when starting from a stop or in slow-speed maneuvers.
      </Card>
      <Card dot="purple" title="Engine Braking">
        Shifting to a lower gear creates an effect similar to applying the brakes — this is engine braking. To use it safely, shift down one gear at a time and ease the clutch through the friction zone between each downshift.
      </Card>
      <Card dot="amber" title="Counter-Steering (above ~12 mph)">
        To turn/lean the motorcycle: <strong>press the handgrip in the direction you want to go.</strong>
        <div style={{ marginTop: 8 }}>
          <span className="pill pill-blue">Press left grip → lean left → go left</span>
          <span className="pill pill-blue">Press right grip → lean right → go right</span>
        </div>
        <Callout type="info">In <strong>normal turns</strong>, rider and motorcycle lean together. In <strong>slow, tight turns</strong>, counterbalance by leaning the motorcycle more while keeping your body straighter.</Callout>
      </Card>
      <Card dot="teal" title="4-Step Turning Formula">
        <div className="steps">
          <Step num={1}><strong>Slow</strong> — reduce speed before the turn using throttle and brakes</Step>
          <Step num={2}><strong>Look</strong> — look through the turn where you want to go; turn head and eyes, not shoulders; keep eyes level with horizon</Step>
          <Step num={3}><strong>Roll</strong> — roll on the throttle through the turn; maintain steady speed or gradually accelerate; avoid decelerating mid-turn</Step>
          <Step num={4}><strong>Press</strong> — press on the handgrip in the direction of the turn (counter-steer) to lean and complete the turn</Step>
        </div>
      </Card>
      <Card dot="red" title="Body Position">
        <FactRow label="Seat position" val="Sit forward so arms are slightly bent at the handgrips" />
        <FactRow label="Knees" val="Against gas tank for balance and control" />
        <FactRow label="Feet" val="Firmly on footrests — never drag feet" />
        <FactRow label="Handlebars" val="Adjust so hands are even with or below elbows" />
      </Card>
    </>
  )
}

function LaneSection() {
  return (
    <>
      <h3 className="section-head">Lane Positions — When &amp; Why</h3>
      <Card dot="blue" title="The Three Lane Positions">
        Each traffic lane gives a motorcycle <strong>three areas of travel</strong>. Your lane position should maximize your space cushion and visibility. <em>No portion of the lane needs to be avoided</em> — including the center.
      </Card>

      <div className="lane-diagram">
        <svg width="100%" viewBox="0 0 680 320" style={{ display: 'block' }}>
          <rect x="0" y="0" width="680" height="320" fill="#1a1d22" />
          {/* Road markings */}
          <line x1="227" y1="0" x2="227" y2="320" stroke="#444" strokeWidth="1" strokeDasharray="12 8" />
          <line x1="454" y1="0" x2="454" y2="320" stroke="#444" strokeWidth="1" strokeDasharray="12 8" />

          {/* Position 1 — Left */}
          <rect x="10" y="16" width="207" height="288" rx="8" fill="rgba(58,143,232,0.08)" stroke="rgba(58,143,232,0.25)" strokeWidth="1" />
          <text x="113" y="44" textAnchor="middle" fill="#5ba3f0" fontSize="14" fontWeight="700" fontFamily="Barlow Condensed, sans-serif" letterSpacing="0.05em">POSITION 1</text>
          <text x="113" y="62" textAnchor="middle" fill="#3a8fe8" fontSize="11" fontFamily="Barlow, sans-serif">Left third</text>
          {/* Moto P1 */}
          <rect x="98" y="98" width="30" height="18" rx="4" fill="#3a8fe8" opacity="0.7" />
          <circle cx="103" cy="117" r="7" fill="none" stroke="#3a8fe8" strokeWidth="2" />
          <circle cx="123" cy="117" r="7" fill="none" stroke="#3a8fe8" strokeWidth="2" />
          <rect x="106" y="94" width="12" height="7" rx="2" fill="#3a8fe8" opacity="0.9" />
          <text x="113" y="148" textAnchor="middle" fill="#5ba3f0" fontSize="11" fontFamily="Barlow, sans-serif">✓ Default position</text>
          <text x="113" y="165" textAnchor="middle" fill="#5ba3f0" fontSize="11" fontFamily="Barlow, sans-serif">✓ Passing parked cars</text>
          <text x="113" y="182" textAnchor="middle" fill="#5ba3f0" fontSize="11" fontFamily="Barlow, sans-serif">✓ Blind intersections</text>
          <text x="113" y="199" textAnchor="middle" fill="#5ba3f0" fontSize="11" fontFamily="Barlow, sans-serif">✓ Following a vehicle</text>
          <text x="113" y="216" textAnchor="middle" fill="#5ba3f0" fontSize="11" fontFamily="Barlow, sans-serif">✓ Before passing ahead</text>
          {/* P1 separator + footer */}
          <line x1="22" y1="232" x2="206" y2="232" stroke="rgba(91,163,240,0.2)" strokeWidth="1" />
          <text x="113" y="256" textAnchor="middle" fill="rgba(91,163,240,0.6)" fontSize="10" fontFamily="Barlow, sans-serif">Seen in side mirror</text>
          <text x="113" y="272" textAnchor="middle" fill="rgba(91,163,240,0.6)" fontSize="10" fontFamily="Barlow, sans-serif">(less often checked)</text>

          {/* Position 2 — Center */}
          <rect x="237" y="16" width="207" height="288" rx="8" fill="rgba(61,184,122,0.08)" stroke="rgba(61,184,122,0.25)" strokeWidth="1" />
          <text x="340" y="44" textAnchor="middle" fill="#50cc8e" fontSize="14" fontWeight="700" fontFamily="Barlow Condensed, sans-serif" letterSpacing="0.05em">POSITION 2</text>
          <text x="340" y="62" textAnchor="middle" fill="#3db87a" fontSize="11" fontFamily="Barlow, sans-serif">Center</text>
          {/* Moto P2 */}
          <rect x="325" y="98" width="30" height="18" rx="4" fill="#3db87a" opacity="0.7" />
          <circle cx="330" cy="117" r="7" fill="none" stroke="#3db87a" strokeWidth="2" />
          <circle cx="350" cy="117" r="7" fill="none" stroke="#3db87a" strokeWidth="2" />
          <rect x="333" y="94" width="12" height="7" rx="2" fill="#3db87a" opacity="0.9" />
          <text x="340" y="148" textAnchor="middle" fill="#50cc8e" fontSize="11" fontFamily="Barlow, sans-serif">✓ Behind a vehicle</text>
          <text x="340" y="165" textAnchor="middle" fill="#50cc8e" fontSize="11" fontFamily="Barlow, sans-serif">✓ Parked cars + oncoming</text>
          <text x="340" y="182" textAnchor="middle" fill="#50cc8e" fontSize="11" fontFamily="Barlow, sans-serif">✓ Being passed from behind</text>
          <text x="340" y="199" textAnchor="middle" fill="#50cc8e" fontSize="11" fontFamily="Barlow, sans-serif">✓ Avoid blind spots</text>
          {/* P2 separator + footer */}
          <line x1="249" y1="232" x2="433" y2="232" stroke="rgba(80,204,142,0.2)" strokeWidth="1" />
          <text x="340" y="256" textAnchor="middle" fill="rgba(80,204,142,0.6)" fontSize="10" fontFamily="Barlow, sans-serif">Visible in rearview mirror</text>
          <text x="340" y="272" textAnchor="middle" fill="rgba(80,204,142,0.5)" fontSize="10" fontFamily="Barlow, sans-serif">⚠ Watch for oil strip</text>

          {/* Position 3 — Right */}
          <rect x="464" y="16" width="207" height="288" rx="8" fill="rgba(232,160,32,0.08)" stroke="rgba(232,160,32,0.25)" strokeWidth="1" />
          <text x="567" y="44" textAnchor="middle" fill="#f0b840" fontSize="14" fontWeight="700" fontFamily="Barlow Condensed, sans-serif" letterSpacing="0.05em">POSITION 3</text>
          <text x="567" y="62" textAnchor="middle" fill="#e8a020" fontSize="11" fontFamily="Barlow, sans-serif">Right third</text>
          {/* Moto P3 */}
          <rect x="552" y="98" width="30" height="18" rx="4" fill="#e8a020" opacity="0.7" />
          <circle cx="557" cy="117" r="7" fill="none" stroke="#e8a020" strokeWidth="2" />
          <circle cx="577" cy="117" r="7" fill="none" stroke="#e8a020" strokeWidth="2" />
          <rect x="560" y="94" width="12" height="7" rx="2" fill="#e8a020" opacity="0.9" />
          <text x="567" y="148" textAnchor="middle" fill="#f0b840" fontSize="11" fontFamily="Barlow, sans-serif">✓ Being passed (wind)</text>
          <text x="567" y="165" textAnchor="middle" fill="#f0b840" fontSize="11" fontFamily="Barlow, sans-serif">✓ Avoid extended mirrors</text>
          <text x="567" y="182" textAnchor="middle" fill="#f0b840" fontSize="11" fontFamily="Barlow, sans-serif">✓ Avoid thrown objects</text>
          <text x="567" y="199" textAnchor="middle" fill="#f0b840" fontSize="11" fontFamily="Barlow, sans-serif">✓ Oncoming vehicle passes</text>
          {/* P3 separator + footer */}
          <line x1="476" y1="232" x2="660" y2="232" stroke="rgba(232,160,32,0.2)" strokeWidth="1" />
          <text x="567" y="256" textAnchor="middle" fill="rgba(240,184,64,0.6)" fontSize="10" fontFamily="Barlow, sans-serif">Move right when passed</text>
          <text x="567" y="272" textAnchor="middle" fill="rgba(240,184,64,0.6)" fontSize="10" fontFamily="Barlow, sans-serif">to avoid wind &amp; mirrors</text>

          {/* Direction arrow */}
          <text x="340" y="315" textAnchor="middle" fill="#444" fontSize="12" fontFamily="Barlow, sans-serif">← Direction of travel →</text>
        </svg>
      </div>

      <div className="two-col">
        <Card dot="blue" title="Left (Position 1) — use when:">
          <ul style={{ paddingLeft: 16, fontSize: 13, lineHeight: 1.7, color: 'var(--text2)' }}>
            <li>Default riding position</li>
            <li>Passing parked vehicles</li>
            <li>Approaching a blind intersection</li>
            <li>Following another vehicle (seen in side mirror)</li>
            <li>Preparing to pass a vehicle ahead</li>
          </ul>
          <Callout type="info">Seen in driver's <em>side</em> mirror — note most drivers check side mirrors less often than rearview.</Callout>
        </Card>
        <Card dot="green" title="Center (Position 2) — use when:">
          <ul style={{ paddingLeft: 16, fontSize: 13, lineHeight: 1.7, color: 'var(--text2)' }}>
            <li>Following a vehicle (rearview mirror)</li>
            <li>Passing parked cars with oncoming traffic</li>
            <li>Being passed by a vehicle</li>
            <li>Avoiding another driver's blind spot</li>
          </ul>
          <Callout type="warning"><strong>Oil strip:</strong> Center of lane can collect oil/grease drips. Ride left or right of it while staying in the center zone.</Callout>
        </Card>
      </div>

      <Card dot="amber" title="Key Lane Position Rules to Memorize">
        <FactRow label="Lane filtering / splitting" val="NOT legal in Idaho — ever" />
        <FactRow label="Lane sharing (side by side)" val="Also not legal in Idaho" />
        <FactRow label="Default position" val="Left third of the lane" />
        <FactRow label="When being passed" val="Center or right — avoid mirrors, objects, wind" />
        <FactRow label="Parked cars + oncoming traffic" val="Stay center to maximize space cushion" />
        <FactRow label="Riding beside vehicles" val="Avoid — you may be in their blind spot" />
      </Card>

      <Card dot="teal" title="Following Distance & Space Cushion">
        <FactRow label="Minimum following distance" val="3 seconds" />
        <FactRow label="Night riding" val="4 seconds or more" />
        <FactRow label="Heavy traffic / slippery pavement" val="Increase beyond 3 seconds" />
        <FactRow label="Tailgater handling" val="Change lanes and let them pass; or gradually slow to open space — don't speed up" />
      </Card>
    </>
  )
}

function BrakingSection() {
  return (
    <>
      <h3 className="section-head">Braking, Skids &amp; Crash Avoidance</h3>
      <Card dot="blue" title="Braking Basics">
        <FactRow label="Front brake power" val="At least 70% of total stopping power" />
        <FactRow label="Rule" val="Always use BOTH brakes every time you slow or stop" />
        <FactRow label="Front brake technique" val="Squeeze smoothly and firmly — never grab suddenly" />
        <FactRow label="Rear brake" val="Apply less pressure — weight transfers forward" />
        <Callout type="danger"><strong>Grabbing the front brake or jamming the rear</strong> can lock wheels and cause serious loss of control. Squeeze, don't grab.</Callout>
      </Card>
      <Card dot="red" title="Front Wheel Skid">
        Caused by over-applying the front brake. Results in immediate loss of steering and balance.
        <div className="steps" style={{ marginTop: 8 }}>
          <Step num={1}><strong>Release</strong> the front brake immediately and completely</Step>
          <Step num={2}><strong>Reapply</strong> smoothly and gradually</Step>
        </div>
        <Callout type="danger">Failure to fully release immediately can result in a crash. ABS is designed to prevent front-wheel skids.</Callout>
      </Card>
      <Card dot="red" title="Rear Wheel Skid">
        Caused by too much rear brake pressure.
        <div className="steps" style={{ marginTop: 8 }}>
          <Step num={1}><strong>Release</strong> the rear brake immediately and completely</Step>
          <Step num={2}><strong>Reapply smoothly</strong> with light-to-lighter pressure</Step>
        </div>
        <Callout type="danger"><strong>High-side crash risk:</strong> A locked rear wheel that is out of alignment when released can cause the bike to snap upright and throw the rider. That's why you must release <em>immediately</em> — before the wheels have a chance to get out of alignment.</Callout>
      </Card>
      <Card dot="amber" title="Braking in a Curve">
        Lean angle reduces available traction for braking. The greater the lean, the less braking you can apply.
        <div className="steps" style={{ marginTop: 8 }}>
          <Step num={1}>Try to get the motorcycle as <strong>perpendicular to the road</strong> as possible before braking hard</Step>
          <Step num={2}>If you can't straighten first, brake <strong>gradually</strong> and increase pressure as the bike straightens</Step>
          <Step num={3}>Full braking pressure is only safe when completely upright with handlebars square</Step>
        </div>
      </Card>
      <Card dot="purple" title="ABS — Anti-Lock Braking System">
        Prevents wheel lock-up during straight-line stops. Electronic sensors detect a wheel lock-up and release/reapply brake pressure multiple times per second. To use: apply maximum pressure on both brakes and let ABS do the work.
        <Callout type="tip">Some newer ABS systems also work while leaned into a turn. Check your owner's manual.</Callout>
      </Card>
      <Card dot="teal" title="Swerving">
        A rapid direction change using two consecutive counter-steers. Keep your body upright while the motorcycle leans beneath you. Knees against tank, feet on footrests.
        <Callout type="danger"><strong>Critical rule: NEVER brake while swerving.</strong> Brake before OR after — not during.</Callout>
      </Card>
    </>
  )
}

function HazardsSection() {
  return (
    <>
      <h3 className="section-head">Road Hazards &amp; Mechanical Problems</h3>
      <div className="two-col">
        <Card dot="amber" title="Railroad Tracks">
          Cross at <strong>45° or more</strong> to prevent tires catching in grooves. Never cross parallel to tracks.
        </Card>
        <Card dot="amber" title="Grooves & Bridge Gratings">
          Can cause the bike to <strong>drift and wander</strong>. Grip firmly, cross at an angle when possible, and maintain steady throttle.
        </Card>
      </div>
      <div className="two-col">
        <Card dot="red" title="Stuck Throttle">
          Immediately use the <strong>engine cut-off switch</strong> and pull in the clutch at the same time — this removes power from the rear wheel. Once under control, pull off and stop. Check the throttle cable before riding again.
        </Card>
        <Card dot="red" title="Speed Wobble">
          <strong>Grip handlebars firmly</strong> without fighting the wobble, <strong>squeeze in the clutch</strong> to coast, and gradually slow. Do NOT apply the brakes — braking can make the wobble worse. Move forward in the saddle.
        </Card>
      </div>
      <div className="two-col">
        <Card dot="blue" title="Unavoidable Obstacle">
          Slow down, approach at a <strong>right angle</strong> if possible, rise slightly off the seat to absorb impact with your legs.
        </Card>
        <Card dot="blue" title="Slippery Surfaces">
          Reduce speed. Avoid sudden moves. Look for dry pavement. Brake and turn smoothly. Increase following distance.
        </Card>
      </div>
      <Card dot="purple" title="Passengers & Cargo">
        <FactRow label="Required for passengers" val="Permanent seat + footrests + bike designed for 2" />
        <FactRow label="Passenger instruction" val="Lean with the bike the same as the rider — no sudden movements" />
        <FactRow label="Effect on braking" val="More weight = longer stopping distance — allow extra following distance" />
      </Card>
      <Card dot="teal" title="Intersection Dangers">
        The greatest potential for conflict is at intersections. Vehicles turning left in front of you are the most critical danger. At blind intersections, move to the portion of the lane that makes you visible earliest.
        <Callout type="info"><strong>Idaho red light law:</strong> After a complete stop, you may proceed through a red light if the signal fails to activate after one complete cycle. You must yield to all traffic.</Callout>
      </Card>
      <Card dot="green" title="Group Riding">
        <FactRow label="Recommended formation" val="Staggered — not side-by-side, not single file" />
        <FactRow label="Why staggered?" val="Maintains spacing and visibility within the group" />
      </Card>
    </>
  )
}

function SipdeSection() {
  return (
    <>
      <h3 className="section-head">S.I.P.D.E. — Mental Motorcycling Strategy</h3>
      <Card dot="blue" title="The SIPDE System">
        <div>
          {[
            { letter: 'S', word: 'Scan', desc: 'Aggressively search ahead, behind, and to the sides for potential hazards. What you don\'t detect can hurt you. Focus especially on intersections, shopping areas, school zones, and construction zones.' },
            { letter: 'I', word: 'Identify', desc: 'Locate hazards and potential conflicts. Three categories: (1) other vehicles that may move into your path, (2) pedestrians, children, and animals that can be unpredictable, (3) stationary objects like potholes, debris, guard rails.' },
            { letter: 'P', word: 'Predict', desc: 'Consider speed, distance, and direction of hazards. Ask "What if...?" continuously. Vehicles moving into your path are more critical than those moving away. Predict when, where, and how to act.' },
            { letter: 'D', word: 'Decide', desc: 'Make decisions based on your predictions. Three choices: (1) adjust speed, (2) adjust position, (3) communicate your presence. Slowing is usually best — but accelerating away from a hazard is sometimes correct.' },
            { letter: 'E', word: 'Execute', desc: 'Take the appropriate action. Adjust speed, adjust position/direction, communicate with horn, brake light, high beam, or turn signals. In high-risk areas: cover clutch and both brakes to reduce reaction time.' },
          ].map(({ letter, word, desc }) => (
            <div key={letter} className="acronym-row">
              <div className="acronym-letter">{letter}</div>
              <div className="acronym-content"><strong>{word}</strong> — {desc}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card dot="blue" title="Being Visible — See and Be Seen">
        <FactRow label="Clothing" val="Bright colors + retro-reflective material — day and night" />
        <FactRow label="Headlight" val="Keep on at all times — set on low during daylight" />
        <FactRow label="Brake light" val="Flash before slowing — especially when slowing unexpectedly" />
        <FactRow label="Turn signals" val="Use every time, even when no one seems around — cancel immediately after" />
        <FactRow label="Mirrors" val="Convex (wider view but makes things look farther than they are)" />
        <FactRow label="Horn" val="Less loud than a car's — use it but don't rely on it alone" />
      </Card>
      <Card dot="amber" title="Night Riding Adjustments">
        <FactRow label="Speed" val="Reduce — headlight covers less than daylight vision" />
        <FactRow label="Following distance" val="Increase to 4+ seconds" />
        <FactRow label="High beam" val="Use when not behind or approaching another vehicle" />
        <FactRow label="Lane position" val="Be flexible — use whatever position is best for seeing and being seen" />
      </Card>
    </>
  )
}

function LawsSection() {
  return (
    <>
      <h3 className="section-head">Idaho-Specific Laws to Memorize</h3>
      <Card dot="red" title="Things That Are NOT Legal in Idaho">
        <div>
          <span className="pill pill-red">Lane filtering</span>
          <span className="pill pill-red">Lane splitting</span>
          <span className="pill pill-red">Lane sharing (side by side)</span>
        </div>
      </Card>
      <Card dot="blue" title="Passing Speed Exception">
        You may exceed the posted speed limit by <strong>up to 15 mph</strong> while passing a vehicle traveling below the speed limit on a <strong>2-lane highway with a posted limit of 55 mph or more</strong>. Not allowed in work zones. Never pass on a bridge, blind hill, or anywhere sight distance is limited.
      </Card>
      <Card dot="amber" title="Red Light Law">
        A motorcycle rider may proceed through a red light — after a <strong>complete stop</strong> — if the signal fails to activate after <strong>one complete cycle</strong>. Must yield to all traffic in or approaching the intersection. Does not apply if the signal can be triggered by your motorcycle.
      </Card>
      <Card dot="purple" title="Helmet Law Summary">
        <FactRow label="Required for" val="All riders under age 18" />
        <FactRow label="Standard" val="DOT-compliant (also accepts Snell, ECE)" />
        <FactRow label="Must" val="Fit snugly all the way around; no cracks, loose padding, or frayed straps" />
        <FactRow label="Strongly recommended for" val="All riders regardless of age" />
      </Card>
      <Card dot="green" title="Passing Speed Exception — Details">
        <FactRow label="Allowed overage" val="Up to 15 mph over posted limit" />
        <FactRow label="Road type" val="2-lane highway only" />
        <FactRow label="Posted limit must be" val="55 mph or greater" />
        <FactRow label="Not allowed in" val="Work zones — ever" />
      </Card>
      <Card dot="teal" title="Alcohol & DUI">
        Idaho BAC legal limit is 0.08% for riders 21 and over. Under 21: any detectable alcohol is illegal. Failing or refusing a breath test triggers automatic license suspension. Alcohol and drugs are leading factors in fatal motorcycle crashes.
      </Card>
    </>
  )
}

const FLASH_CARDS = [
  { q: "What % of stopping power does the front brake provide?", a: "At least 70% of total stopping power." },
  { q: "How long is an instruction permit valid?", a: "180 days. Renewable once if original test was within 12 months." },
  { q: "What are the 3 permit restrictions?", a: "Daylight only, no freeway riding, no passengers." },
  { q: "What is the minimum following distance?", a: "3 seconds minimum. 4+ seconds at night or in poor conditions." },
  { q: "What is the default lane position?", a: "Left third of the lane (position 1)." },
  { q: "What position when being passed by a vehicle?", a: "Center or right portion of the lane — to avoid mirrors, objects, and wind blasts." },
  { q: "Is lane splitting legal in Idaho?", a: "No — lane filtering, splitting, and sharing are all illegal in Idaho." },
  { q: "What do you do if the front wheel skids?", a: "Release the front brake immediately and completely, then reapply smoothly." },
  { q: "What do you do if the rear wheel skids?", a: "Release the rear brake immediately and completely — before the wheels get out of alignment. Reapply smoothly with light pressure." },
  { q: "What does S.I.P.D.E. stand for?", a: "Scan, Identify, Predict, Decide, Execute." },
  { q: "Taillight must be visible how far?", a: "500 feet to the rear." },
  { q: "Mirror must show how far?", a: "At least 200 feet to the rear." },
  { q: "Headlight at 35 mph+ illuminates how far?", a: "At least 300 feet ahead." },
  { q: "What is the 4-step turn formula?", a: "Slow → Look → Roll → Press." },
  { q: "What is the passing speed exception?", a: "Up to 15 mph over limit, on a 2-lane highway posted 55+ mph. Never in work zones." },
  { q: "How many times more likely to survive with a helmet?", a: "3 times more likely to survive a head injury." },
  { q: "What gear should you be in while stopped?", a: "First gear — so you can move quickly if needed." },
  { q: "What is the M endorsement one-time fee?", a: "$15.00 added to your driver's license." },
  { q: "What is counter-steering?", a: "Pressing the handgrip in the direction you want to turn, causing the bike to lean that way." },
  { q: "Can you brake while swerving?", a: "No — brake BEFORE or AFTER swerving, never during." },
  { q: "What should a passenger do in a turn?", a: "Lean with the motorcycle exactly as the rider does — no sudden movements." },
  { q: "What angle to cross railroad tracks?", a: "45 degrees or more." },
  { q: "What is the friction zone?", a: "The area of clutch travel where engine power begins to transmit to the rear wheel." },
  { q: "What causes most fatal crashes in Idaho?", a: "Over 40% of fatal motorcycle crashes are single-vehicle accidents where a rider failed to negotiate a turn." },
]

function FlashSection() {
  const [revealed, setRevealed] = useState({})
  const toggle = (i) => setRevealed(r => ({ ...r, [i]: !r[i] }))

  return (
    <>
      <h3 className="section-head">Flash Cards — Tap to Reveal</h3>
      <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: '1rem' }}>These cover the most commonly tested facts. Tap any card to see the answer.</p>
      <div className="flash-grid">
        {FLASH_CARDS.map((fc, i) => (
          <div key={i} className={`flash-card${revealed[i] ? ' revealed' : ''}`} onClick={() => toggle(i)}>
            <div className="flash-q">{fc.q}</div>
            {revealed[i] && <div className="flash-a">{fc.a}</div>}
            <div className="flash-hint">{revealed[i] ? 'Tap to hide' : 'Tap to reveal'}</div>
          </div>
        ))}
      </div>
    </>
  )
}

const SECTION_MAP = {
  fees: <FeesSection />,
  gear: <GearSection />,
  controls: <ControlsSection />,
  lanes: <LaneSection />,
  braking: <BrakingSection />,
  hazards: <HazardsSection />,
  sipde: <SipdeSection />,
  laws: <LawsSection />,
  flash: <FlashSection />,
}

export default function StudyGuide({ onBack, theme, toggleTheme }) {
  const [activeTab, setActiveTab] = useState('fees')

  return (
    <div className="page">
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <span className="topbar-title">Study Guide</span>
        <button className="theme-btn" onClick={toggleTheme} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
          {theme === 'dark' ? '☀' : '🌙'}
        </button>
        <a
          href="https://itd.idaho.gov/wp-content/uploads/2025/10/Motorcycle_manual.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="back-btn"
          style={{ textDecoration: 'none' }}
        >
          Open Handbook ↗
        </a>
      </div>
      <div className="page-content">
        <div className="callout callout-info" style={{ marginBottom: '1rem', fontSize: 12 }}>
          <strong>Last updated May 7, 2026</strong> — content verified against the <em>Idaho Motorcycle Rider's Handbook</em> (July 2025, 114 pages).
        </div>
        <div className="tabs">
          {TABS.map(t => (
            <button key={t.id} className={`tab-btn${activeTab === t.id ? ' active' : ''}`} onClick={() => setActiveTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        {SECTION_MAP[activeTab]}
      </div>
    </div>
  )
}
