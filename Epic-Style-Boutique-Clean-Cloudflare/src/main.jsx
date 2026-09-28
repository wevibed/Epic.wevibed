
import React from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const phone="263787146544";
const wa=`https://wa.me/${phone}?text=${encodeURIComponent("Hello Epic Style Boutique, I would like to enquire about your pyjama sets.")}`;
const images={
 hero:"https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=1400&q=85",
 pink:"https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=85",
 black:"https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85",
 lounge:"https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
 floral:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
 red:"https://images.unsplash.com/photo-1618354691551-44de113f0164?auto=format&fit=crop&w=900&q=85",
 store:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
};

function WA(){return <a className="wa" href={wa} aria-label="WhatsApp">⌕</a>}
function Header(){return <><div className="top"><span>Island City Mall, Shop S78 • 1st Floor, Harare</span><a href="tel:+263787146544">☎ 078 714 6544</a></div><header><a className="brand" href="#">Epic<span>Style</span><small>BOUTIQUE</small></a><nav><a href="#collections">Collections</a><a href="#products">Products</a><a href="#contact">Contact</a></nav><div className="icons"><button>⌕</button><button>☰</button></div></header></>}
function Cat({image,title}){return <a className="cat" href="#products"><img src={image} alt={title}/><span>{title}</span><b>→</b></a>}
function Product({image,title}){return <article className="product"><img src={image} alt={title}/><div><h3>{title}</h3><a href="#contact">Enquire →</a></div></article>}

function App(){return <div>
<Header/>
<main>
<section className="hero"><img src={images.hero} alt="Epic Style Boutique fashion"/><div className="heroCopy"><p className="eyebrow">EPIC STYLE BOUTIQUE</p><h1>Comfort Looks<br/>Better <em>On You</em></h1><p>Pyjama sets and comfortable styles in sizes S–4XL.</p><a className="btn" href="#collections">SHOP NOW →</a></div><div className="trust"><span>♡<b>Pyjama Sets</b><small>Comfort & Style</small></span><span>◇<b>Sizes S–4XL</b><small>Inclusive sizing</small></span><span>⌂<b>Visit Us</b><small>Island City Mall</small></span></div></section>

<section id="collections" className="section"><div className="heading"><div><p className="eyebrow pink">SHOP THE COLLECTION</p><h2>Find your style.</h2></div><a href="#products">View All →</a></div><div className="cats">
<Cat image={images.pink} title="Pyjama Sets"/><Cat image={images.black} title="Sleepwear"/><Cat image={images.floral} title="Printed Styles"/><Cat image={images.lounge} title="Loungewear"/><Cat image={images.red} title="Statement Styles"/><Cat image={images.pink} title="Sizes S–4XL"/>
</div></section>

<section id="products" className="section productsSection"><div className="heading"><div><p className="eyebrow pink">FEATURED STYLES</p><h2>Explore the range.</h2></div><a href="#contact">Ask about availability →</a></div><div className="products">
<Product image={images.pink} title="Pyjama Set"/><Product image={images.black} title="Classic Sleepwear"/><Product image={images.floral} title="Printed Set"/><Product image={images.lounge} title="Loungewear"/><Product image={images.red} title="Sleepwear"/><Product image={images.pink} title="Pyjama Style"/>
</div></section>

<section className="feature"><div><p className="eyebrow">COMFORT & STYLE</p><h2>Relax in style.</h2><p>Comfortable sleepwear and pyjama styles designed for everyday lounging.</p><a className="btn" href="#products">BROWSE STYLES →</a></div><img src={images.lounge} alt="Loungewear"/></section>

<section className="feature light"><img src={images.floral} alt="Printed sleepwear"/><div><p className="eyebrow pink">SIZES S–4XL</p><h2>Style for every body.</h2><p>Explore the available range and contact the boutique to confirm sizes and current stock.</p><a className="btn pinkBtn" href={wa}>ASK ON WHATSAPP →</a></div></section>

<section id="contact" className="contact"><div><p className="eyebrow pink">VISIT EPIC STYLE</p><h2>Island City Mall.</h2><p><b>Shop S78, 1st Floor</b><br/>Harare, Zimbabwe</p><p><a href="tel:+263787146544">078 714 6544</a></p><p>Opening hours: to be confirmed.</p><a className="btn pinkBtn" href={wa}>CHAT ON WHATSAPP →</a></div><div className="map"><div className="pin">●</div><strong>Epic Style Boutique</strong><span>Island City Mall, Shop S78, 1st Floor</span><button>MAP LOCATION →</button></div></section>
</main>
<footer><div className="brand footerBrand">Epic<span>Style</span><small>BOUTIQUE</small></div><p>Pyjama Sets • Sleepwear • Sizes S–4XL</p><p>© 2026 Epic Style Boutique</p></footer><WA/>
</div>}
createRoot(document.getElementById("root")).render(<App/>);
