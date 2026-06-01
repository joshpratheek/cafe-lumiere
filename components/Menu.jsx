import { useEffect, useRef, useState } from 'react';

const tabs = [
  { id: 'coffee', icon: '☕', label: 'Coffee' },
  { id: 'food',   icon: '🍽', label: 'Food' },
  { id: 'rec',    icon: '✦',  label: 'Most Recommended' },
  { id: 'chef',   icon: '👨‍🍳', label: "Chef's Best" },
  { id: 'fans',   icon: '♥',  label: 'Fan Favourites' },
];

const coffee = [
  { img:'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80', badge:'Signature', category:'Espresso · House Blend', name:'Lumière Signature Espresso', desc:'A double ristretto built on our house blend — Colombian Huila and Ethiopian Sidama. Notes of dark chocolate, dried cherry, and a cedar-wood finish that lingers.', price:'280', tags:['Dairy-free option','Strong'], hero:true },
  { img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=80', badge:'New', category:'Pour Over · Single Origin', name:'Ethiopian Yirgacheffe V60', desc:'Washed process, light roast. Jasmine florals on the nose, blueberry and lemon curd on the palate. Ground to order. Brewed at 93°C over four minutes.', price:'380', tags:['Black','Light roast'], hero:true },
  { img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700&q=80', category:'Latte · Milk Bar', name:'Burnt Honey Oat Latte', desc:'Double espresso, steamed oat milk, house-made burnt honey syrup. Sweet, bitter, silky.', price:'340', tags:['Vegan'] },
  { img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80', category:'Cold Brew · Nitrogen', name:'Nitro Cold Brew', desc:'18-hour steep, nitrogen-charged on tap. Cascading, creamy head. No ice, no milk, no compromise.', price:'360', tags:['Vegan','Served cold'] },
  { img:'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=700&q=80', category:'Cortado · Seasonal', name:'Cardamom Rose Cortado', desc:'Ristretto, whole milk, house rose syrup, fresh-ground cardamom. Delicate but confident.', price:'310', tags:['Seasonal'] },
];

const food = [
  { img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80', badge:'Kitchen Special', category:'Brunch · Vegetarian', name:'Sourdough Ricotta Toast', desc:'House-baked sourdough, whipped ricotta, roasted seasonal stone fruit, wildflower honey, lemon zest, crushed pistachios.', price:'380', tags:['Vegetarian','Brunch'], tall:true },
  { img:'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=700&q=80', category:'Pastry · Baked Daily', name:'Almond Frangipane Croissant', desc:'72-hour laminated dough, filled and baked with frangipane cream, topped with flaked almonds and powdered sugar.', price:'260', tags:['Vegetarian'] },
  { img:'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700&q=80', category:'Brunch · Hot', name:'Spiced Shakshuka', desc:'Slow-cooked tomato and pepper sauce, two poached eggs, crumbled feta, fresh herbs. Served with toasted sourdough soldiers.', price:'420', tags:['Vegetarian','Gluten-free option'] },
  { img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&q=80', category:'Brunch · Sweet', name:'Brioche French Toast', desc:'House brioche, vanilla custard soak, pan-fried in brown butter. Served with mixed berry compote and crème fraîche.', price:'390', tags:['Sweet'] },
  { img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80', category:'Brunch · Light', name:'Smashed Avocado Board', desc:'Sourdough, smashed avocado with lime and chilli, two soft-poached eggs, dukkah, micro herbs, everything seasoning.', price:'410', tags:['Vegetarian'] },
];

const rec = [
  { img:'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80', badge:'★ #1 Rated', rating:'★★★★★', category:'All-time Best · Espresso', name:'Lumière Signature Espresso', desc:'Ordered by 1 in 3 guests. The one that makes people come back the next morning.', price:'280', tags:['4.9 / 5.0','2,400+ reviews'], hero:true },
  { img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80', rating:'★★★★★', category:'Food · #2 Most Ordered', name:'Sourdough Ricotta Toast', desc:'"Best brunch plate in the city." — consistently top-reviewed on Zomato and Google.', price:'380', tags:['4.8 / 5.0'] },
  { img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80', rating:'★★★★★', category:'Coffee · #3 Most Ordered', name:'Nitro Cold Brew', desc:'"Life-changing." The drink that made us famous at Hitech City.', price:'360', tags:['4.8 / 5.0'] },
  { img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80', category:'Coffee', name:'Burnt Honey Oat Latte', price:'340', tags:['4.7 / 5.0'] },
  { img:'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&q=80', category:'Pastry', name:'Almond Frangipane Croissant', price:'260', tags:['4.7 / 5.0'] },
  { img:'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80', category:'Coffee · Seasonal', name:'Cardamom Rose Cortado', price:'310', tags:['4.6 / 5.0'] },
  { img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80', category:'Food · Brunch', name:'Brioche French Toast', price:'390', tags:['4.6 / 5.0'] },
];

const chef = [
  { img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80', badge:"Chef's Finest", badgeGold:true, category:'Kitchen · Signature Creation', name:'The Lumière Board', desc:"Arjun's take on the ultimate café plate. Sourdough, smashed avocado, confit cherry tomatoes, soft-poached egg, house dukkah, labneh quenelle, and a drizzle of chilli oil pressed in-house.", note:'"This is the plate I\'d make if I had one chance to show you what we believe food should be."', price:'580', tags:['Serves 1–2','Vegetarian'], hero:true },
  { img:'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700&q=80', badge:"Chef's Pick", badgeGold:true, category:'Kitchen · Slow Cook', name:'Spiced Shakshuka', desc:'Six hours of simmering. This is what patience tastes like.', note:'"My grandmother\'s method, my spice blend. Don\'t rush it."', price:'420', tags:['Vegetarian'] },
  { img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=80', badge:"Chef's Pick", badgeGold:true, category:'Coffee · Pour Over', name:'Ethiopian Yirgacheffe V60', desc:'The coffee that made Arjun fall in love with the craft. Sourced from Kochere washing station, Grade 1.', price:'380', tags:['Black only'] },
  { img:'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=700&q=80', badge:"Chef's Pick", badgeGold:true, category:'Pastry · Slow Bake', name:'Almond Frangipane Croissant', desc:"Three days of lamination. Arjun's non-negotiable: if the layers aren't visible, it doesn't leave the kitchen.", price:'260', tags:['Baked 6AM daily'] },
  { img:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&q=80', badge:"Chef's Pick", badgeGold:true, category:'Brunch · Sweet', name:'Brioche French Toast', desc:'Brioche baked in-house on Wednesdays and weekends only. The custard soak is a 12-hour overnight recipe.', price:'390', tags:['Wed & weekends'] },
];

const fans = [
  { img:'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&q=80', badge:'♥ Fan Fav', rating:'★★★★★', category:"Coffee · All-Time #1", name:'Lumière Signature Espresso', desc:'"I\'ve had espresso in Rome. This is better." Our most-voted item for three years running.', votes:97, voteCount:'2,400+', price:'280' },
  { img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80', badge:'♥ Fan Fav', rating:'★★★★★', category:'Coffee · Cold', name:'Nitro Cold Brew', desc:'"I drive 40 minutes for this." Our most shared item on Instagram.', votes:91, voteCount:'1,800+', price:'360' },
  { img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=80', badge:'♥ Fan Fav', rating:'★★★★★', category:'Food · Brunch', name:'Sourdough Ricotta Toast', desc:'"I\'ve ordered this 47 times. I counted." The one people bring their parents for.', votes:88, voteCount:'1,600+', price:'380' },
  { img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700&q=80', badge:'♥ Fan Fav', category:'Coffee · Seasonal', name:'Burnt Honey Oat Latte', desc:'"Please never take this off the menu." — every single person who tried it during the trial week.', votes:83, voteCount:'1,200+', price:'340' },
  { img:'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=700&q=80', badge:'♥ Fan Fav', category:'Pastry · Morning', name:'Almond Frangipane Croissant', desc:'"Sold out by 9AM every weekend. I set an alarm."', votes:79, voteCount:'980+', price:'260' },
  { img:'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=700&q=80', badge:'♥ Fan Fav', category:'Coffee · Seasonal', name:'Cardamom Rose Cortado', desc:'"I come every Sunday just for this." People write poetry about it.', votes:74, voteCount:'860+', price:'310' },
];

function Card({ item }) {
  return (
    <div className={`menu-card ${item.hero ? 'hero-card' : ''} ${item.tall ? 'tall' : ''}`}>
      {item.badge && <span className={`menu-card-badge ${item.badgeGold ? 'gold' : ''} ${item.badge.includes('♥') ? 'fan' : ''}`}>{item.badge}</span>}
      {item.rating && <span className="menu-card-rating">{item.rating}</span>}
      <div className="menu-card-img-wrap">
        <img className="menu-card-img" src={item.img} alt={item.name} />
      </div>
      <div className="menu-card-body">
        {item.category && <span className="menu-card-category">{item.category}</span>}
        <h4 className="menu-card-name">{item.name}</h4>
        {item.desc && <p className="menu-card-desc">{item.desc}</p>}
        {item.note && (
          <div className="chef-note">
            <strong>Chef's Note</strong>
            {item.note}
          </div>
        )}
        {item.votes && (
          <div className="fan-votes">
            <div className="fan-votes-bar">
              <div className="fan-votes-fill" style={{ width: `${item.votes}%` }} />
            </div>
            <span>{item.votes}%</span>
          </div>
        )}
        <div className="menu-card-footer">
          <span className="menu-card-price"><sup>₹</sup>{item.price}</span>
          {item.tags && (
            <div className="menu-card-tags">
              {item.tags.map((t, i) => <span className="menu-tag" key={i}>{t}</span>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('coffee');
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.m-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('m-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  return (
    <section className="menu-section" id="menu" ref={ref}>

      <div className="menu-header m-reveal">
        <div className="menu-header-left">
          <p className="menu-eyebrow">Our Menu</p>
          <h2 className="menu-heading">Crafted with<br /><em>intention.</em></h2>
        </div>
        <p className="menu-header-right">
          Every item on our menu is tested, tasted, and refined until it earns its place.
          Nothing filler. Nothing frozen. Everything made here.
        </p>
      </div>

      <div className="menu-tabs-wrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`menu-tab ${active === tab.id ? 'active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            <span className="menu-tab-icon">{tab.icon}</span>
            <span className="menu-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="menu-panels">

        {active === 'coffee' && (
          <div className="menu-panel active">
            <div className="panel-intro m-reveal">
              <h3 className="panel-title">The <em>coffee</em> bar</h3>
              <p className="panel-desc">Single-origin, small-batch roasted on-site. Every extraction dialled to the gram.</p>
            </div>
            <div className="coffee-grid m-reveal">
              {coffee.filter(c => c.hero).map((item, i) => <Card item={item} key={i} />)}
            </div>
            <div className="coffee-grid-bottom m-reveal">
              {coffee.filter(c => !c.hero).map((item, i) => <Card item={item} key={i} />)}
            </div>
          </div>
        )}

        {active === 'food' && (
          <div className="menu-panel active">
            <div className="panel-intro m-reveal">
              <h3 className="panel-title">The <em>kitchen</em></h3>
              <p className="panel-desc">Made from scratch every morning. Bread baked in-house. No shortcuts, ever.</p>
            </div>
            <div className="food-grid m-reveal">
              {food.map((item, i) => <Card item={item} key={i} />)}
            </div>
          </div>
        )}

        {active === 'rec' && (
          <div className="menu-panel active">
            <div className="panel-intro m-reveal">
              <h3 className="panel-title">Most <em>recommended</em></h3>
              <p className="panel-desc">Ordered most often. Reviewed highest. The ones our guests tell their friends about.</p>
            </div>
            <div className="rec-strip m-reveal">
              {rec.filter(r => r.hero || rec.indexOf(r) < 3).slice(0,3).map((item, i) => <Card item={item} key={i} />)}
            </div>
            <div className="rec-grid m-reveal">
              {rec.slice(3).map((item, i) => <Card item={item} key={i} />)}
            </div>
          </div>
        )}

        {active === 'chef' && (
          <div className="menu-panel active">
            <div className="panel-intro m-reveal">
              <h3 className="panel-title">Chef <em>Mehta's</em> picks</h3>
              <p className="panel-desc">Dishes our head chef considers the truest expression of what this kitchen is capable of.</p>
            </div>
            <div className="chef-grid m-reveal">
              {chef.filter(c => c.hero).map((item, i) => <Card item={item} key={i} />)}
              <div style={{display:'flex',flexDirection:'column',gap:'3px'}}>
                {chef.filter(c => !c.hero).slice(0,1).map((item, i) => <Card item={item} key={i} />)}
              </div>
            </div>
            <div className="chef-grid-bottom m-reveal">
              {chef.filter(c => !c.hero).slice(1).map((item, i) => <Card item={item} key={i} />)}
            </div>
          </div>
        )}

        {active === 'fans' && (
          <div className="menu-panel active">
            <div className="panel-intro m-reveal">
              <h3 className="panel-title">The people have <em>spoken.</em></h3>
              <p className="panel-desc">Voted for by our regulars. The items guests refuse to let us take off the menu.</p>
            </div>
            <div className="fans-grid m-reveal">
              {fans.map((item, i) => <Card item={item} key={i} />)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}