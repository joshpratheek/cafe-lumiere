import { useState, useEffect } from 'react';

export default function Reserve() {
  const [activeTab, setActiveTab] = useState('reserve');
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [billVisible, setBillVisible] = useState(false);
  const [reserveSuccess, setReserveSuccess] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);

  useEffect(() => {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    const input = document.getElementById('rdate');
    if (input) {
      const today = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
      input.min = today;
      input.value = today;
    }
  }, [activeTab]);

  const locations = [
    { name: 'The Original', area: 'Banjara Hills' },
    { name: 'The Loft',     area: 'Jubilee Hills' },
    { name: 'The Kiosk',    area: 'Hitech City'   },
  ];

  const hours = [
    { name: 'The Original', time: '8:00 AM – 11:00 PM' },
    { name: 'The Loft',     time: '8:00 AM – 11:00 PM' },
    { name: 'The Kiosk',    time: '6:30 AM – 8:00 PM'  },
  ];

  function handleReserve() {
    setReserveSuccess(true);
    setTimeout(() => setReserveSuccess(false), 5000);
  }

  function handlePay() {
    setBillVisible(false);
    setPaySuccess(true);
  }

  return (
    <section className="res-section">

      {/* Page Header */}
      <div className="res-header">
        <p className="res-eyebrow">Reserve &amp; Dine</p>
        <h1 className="res-heading">
          Secure your seat,<br /><em>savour the moment.</em>
        </h1>
        <p className="res-sub">
          Every table is set with care. Book directly with us or through your preferred
          platform — we'll have a seat waiting.
        </p>
      </div>

      {/* Tab Nav */}
      <div className="res-tabs">
        <button
          className={`res-tab ${activeTab === 'reserve' ? 'active' : ''}`}
          onClick={() => setActiveTab('reserve')}
        >
          Reserve a Table
        </button>
        <button
          className={`res-tab ${activeTab === 'pay' ? 'active' : ''}`}
          onClick={() => setActiveTab('pay')}
        >
          Pay Your Bill
        </button>
      </div>

      {/* ── RESERVE TAB ── */}
      {activeTab === 'reserve' && (
        <div className="res-panel">
          <div className="res-grid">

            {/* Form */}
            <div className="res-form-col">

              {/* Location chips */}
              <div className="res-chips">
                {locations.map((loc, i) => (
                  <div
                    key={i}
                    className={`res-chip ${selectedLocation === i ? 'selected' : ''}`}
                    onClick={() => setSelectedLocation(i)}
                  >
                    {loc.name}
                    <span className="res-chip-label">{loc.area}</span>
                  </div>
                ))}
              </div>

              <div className="res-row">
                <div className="res-field">
                  <label>First Name</label>
                  <input type="text" placeholder="Arjun" />
                </div>
                <div className="res-field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Mehta" />
                </div>
              </div>

              <div className="res-row">
                <div className="res-field">
                  <label>Email</label>
                  <input type="email" placeholder="arjun@email.com" />
                </div>
                <div className="res-field">
                  <label>Phone</label>
                  <input type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="res-row res-triple">
                <div className="res-field">
                  <label>Date</label>
                  <input type="date" id="rdate" />
                </div>
                <div className="res-field">
                  <label>Time</label>
                  <select>
                    <option value="">Select</option>
                    {['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM',
                      '12:00 PM','1:00 PM','6:00 PM','7:00 PM','8:00 PM',
                      '9:00 PM','10:00 PM'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="res-field">
                  <label>Guests</label>
                  <select>
                    {['1 person','2 people','3 people','4 people','5 people','6+ people'].map(g => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="res-field">
                <label>Special Requests</label>
                <textarea placeholder="Anniversary dinner, window seat, dietary requirements…" />
              </div>

              <button className="res-btn-primary" onClick={handleReserve}>
                Confirm Reservation
              </button>

              {reserveSuccess && (
                <div className="res-success">
                  ✓ &nbsp;Your table is confirmed. We'll send a reminder to your email.
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="res-sidebar">
              <div className="res-sidebar-card">
                <p className="res-sidebar-title">Book via Platform</p>
                <p className="res-sidebar-sub">
                  Prefer to reserve through Zomato or Swiggy Dineout? We're listed on both.
                </p>

                <a className="res-platform" href="https://www.zomato.com" target="_blank">
                  <div className="res-platform-icon zomato-icon">Z</div>
                  <div className="res-platform-info">
                    <span>Zomato Dining</span>
                    <small>Reserve &amp; earn Zomato credits</small>
                  </div>
                  <span className="res-arrow">›</span>
                </a>

                <a className="res-platform" href="https://www.swiggy.com/dineout" target="_blank">
                  <div className="res-platform-icon swiggy-icon">S</div>
                  <div className="res-platform-info">
                    <span>Swiggy Dineout</span>
                    <small>Exclusive Swiggy ONE discounts</small>
                  </div>
                  <span className="res-arrow">›</span>
                </a>

                <hr className="res-divider" />

                <p className="res-sidebar-note">
                  Bookings made directly receive priority seating and our complimentary welcome coffee.
                </p>

                <hr className="res-divider" />

                <p className="res-hours-title">Hours</p>
                {hours.map((h, i) => (
                  <div className="res-hours-row" key={i}>
                    <span>{h.name}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── PAY BILL TAB ── */}
      {activeTab === 'pay' && (
        <div className="res-panel">
          <div className="res-grid">

            {/* Pay Form */}
            <div className="res-form-col">
              <p className="res-pay-intro">
                Settle your bill from the table or after you leave — no waiting, no fuss.
              </p>

              <div className="res-row">
                <div className="res-field">
                  <label>Table Number</label>
                  <input type="text" placeholder="e.g. T-12" />
                </div>
                <div className="res-field">
                  <label>Bill Code</label>
                  <input type="text" placeholder="Shown on your receipt" />
                </div>
              </div>

              <div className="res-ornament">or look up by phone</div>

              <div className="res-lookup">
                <input type="tel" placeholder="Registered phone number" />
                <button onClick={() => setBillVisible(true)}>Look Up</button>
              </div>

              {billVisible && (
                <div className="res-bill">
                  <div className="res-bill-header">
                    <span className="res-bill-title">Bill Summary</span>
                    <span className="res-bill-meta">Table T-12 · The Original</span>
                  </div>
                  <div className="res-bill-items">
                    <div className="res-bill-row"><span>Lumière Signature Espresso × 2</span><span>₹560</span></div>
                    <div className="res-bill-row"><span>Sourdough Ricotta Toast × 1</span><span>₹380</span></div>
                    <div className="res-bill-row"><span>Brioche French Toast × 1</span><span>₹390</span></div>
                    <hr className="res-divider" />
                    <div className="res-bill-row"><span>Subtotal</span><span>₹1,330</span></div>
                    <div className="res-bill-row"><span>GST (5%)</span><span>₹67</span></div>
                    <div className="res-bill-total"><span>Total</span><span>₹1,397</span></div>
                  </div>
                  <button className="res-btn-primary" onClick={handlePay}>
                    Pay ₹1,397
                  </button>
                </div>
              )}

              {paySuccess && (
                <div className="res-success">
                  ✓ &nbsp;Payment received. Thank you — hope to see you again soon.
                </div>
              )}

              <div className="res-pay-methods">
                <p className="res-pay-methods-title">We accept</p>
                <div className="res-pay-methods-grid">
                  {['UPI','Credit / Debit','Net Banking','Wallets','Cash'].map(m => (
                    <div className="res-pay-method" key={m}>
                      <div className="res-pay-dot" />{m}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="res-sidebar">
              <div className="res-sidebar-card">
                <p className="res-sidebar-title">Pay via Platform</p>
                <p className="res-sidebar-sub">
                  If you booked through Zomato or Swiggy, you can pay directly from those apps.
                </p>

                <a className="res-platform" href="https://www.zomato.com" target="_blank">
                  <div className="res-platform-icon zomato-icon">Z</div>
                  <div className="res-platform-info">
                    <span>Pay via Zomato</span>
                    <small>Earn rewards on every payment</small>
                  </div>
                  <span className="res-arrow">›</span>
                </a>

                <a className="res-platform" href="https://www.swiggy.com/dineout" target="_blank">
                  <div className="res-platform-icon swiggy-icon">S</div>
                  <div className="res-platform-info">
                    <span>Pay via Swiggy</span>
                    <small>Swiggy ONE cashback applies</small>
                  </div>
                  <span className="res-arrow">›</span>
                </a>

                <hr className="res-divider" />

                <p className="res-sidebar-note">
                  Need help with your bill? Email us at{' '}
                  <a href="mailto:hello@cafelumiere.in" style={{color:'var(--terra-light)'}}>
                    hello@cafelumiere.in
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}