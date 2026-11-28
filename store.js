
const products=[
{"id":16,"name":"کفش مجلسی دانتل دورمچی","category":"shoe","price":null,"colors":["سفید","کرم"],"swatches":["#faf9f6","#e7d8bd"],"sizes":[],"heel":"۵ تا ۷ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/lace-ankle-strap.webp","badge":"","real":true},
{"id":15,"name":"صندل دورمچی نگینی پشت‌زیپ‌دار با پاشنهٔ شیشه‌ای","category":"shoe","price":null,"colors":["سفید","مشکی","نقره‌ای"],"swatches":["#faf9f6","#171717","#c0c0c0"],"sizes":["۳۶","۳۷","۳۸","۳۹","۴۰","۴۱"],"heel":"۸ تا ۱۰ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/ankle-zip-glass-heel.webp","badge":"","real":true},
{"id":14,"name":"کفش کلاسیک طلقی نوارنگینی با پاشنهٔ شیشه‌ای","category":"shoe","price":null,"colors":["۳ رنگ (نام رنگ‌ها اعلام نشده)"],"swatches":[],"sizes":["۳۶","۳۷","۳۸","۳۹","۴۰","۴۱"],"heel":"۱۰ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/crystal-trim-classic.webp","badge":"","real":true},
{"id":13,"name":"کفش فنری نوارنگینی با پاشنهٔ پهن","category":"shoe","price":null,"colors":["مشکی","رزگلد","نقره‌ای","سفید"],"swatches":["#171717","#c58e79","#c0c0c0","#faf9f6"],"sizes":[],"heel":"۵ تا ۷ سانتی‌متر","spring":"خارجی","stock":null,"dimensions":"اعلام نشده","image":"assets/spiral-rhinestone-heel.webp","badge":"","real":true},
{"id":12,"name":"صندل پاوسط طلقی پاپیونی با پاشنهٔ شیشه‌ای","category":"shoe","price":null,"colors":["سفید","مشکی"],"swatches":["#faf9f6","#171717"],"sizes":[],"heel":"اعلام نشده","stock":null,"dimensions":"اعلام نشده","image":"assets/clear-heel-bow-sandal.webp","badge":"","real":true},
{"id":11,"name":"صندل ضربدری تک‌نگین دورمچی","category":"shoe","price":null,"colors":["مشکی","کرم","سفید"],"swatches":["#171717","#e7d8bd","#faf9f6"],"sizes":[],"heel":"۵ تا ۷ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/crisscross-ankle-sandal.webp","badge":"","real":true},
{"id":10,"name":"کفش دانتل طرح‌دار پاوسط نگینی","category":"shoe","price":null,"colors":["کرم","مشکی"],"swatches":["#e2d6c2","#19191e"],"sizes":[],"heel":"۵ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/patterned-lace-mule.webp","badge":"","real":true},
{"id":9,"name":"کفش ورنی کلاسیک بغل‌باز طرح YSL","category":"shoe","price":null,"colors":["مشکی"],"swatches":["#171717"],"soleColor":"قرمز","sizes":[],"heel":"اعلام نشده","stock":null,"dimensions":"اعلام نشده","image":"assets/ysl-style-patent.webp","badge":"","real":true},
{"id":8,"name":"کفش پشت‌زیپ‌دار با نوار نگینی","category":"shoe","price":null,"colors":["سفید","مشکی"],"swatches":["#faf9f6","#171717"],"sizes":[],"heel":"۵ تا ۷ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/rhinestone-back-zip.webp","badge":"","real":true},
{"id":7,"name":"صندل سه‌نوار نگینی دورمچی","category":"shoe","price":null,"colors":["سفید","مشکی","کالباسی","نقره‌ای"],"swatches":["#faf9f6","#171717","#d6a59c","#c0c0c0"],"sizes":[],"heel":"۵ تا ۷ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/three-band-rhinestone.webp","badge":"","real":true},
{"id":6,"name":"کفش دانتل تور شکوفه دورمچی","category":"shoe","price":null,"colors":["سفید"],"swatches":["#faf9f6"],"sizes":[],"heel":"۵ تا ۷ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/blossom-lace.webp","badge":"","real":true},
{"id":5,"name":"کفش ورنی کلاسیک لودشکا نوک‌تیز فلزی","category":"shoe","price":3150000,"colors":["قرمز","آبی روشن","آبی درخشان","سرمه‌ای","زرشکی","مشکی"],"swatches":["#c8162c","#8dc9f3","#009be5","#16315c","#791a32","#151515"],"sizes":[],"heel":"۸ تا ۱۰ سانتی‌متر","stock":null,"dimensions":"اعلام نشده","image":"assets/lodoshka-classic.webp","badge":"","real":true},
{id:1,name:'کیف مجلسی نگین‌دار',category:'bag',price:2850000,colors:['مشکی','طلایی','نقره‌ای'],swatches:['#171717','#c5a04b','#c6c8cc'],stock:true,dimensions:'۲۰ × ۱۴ × ۶ سانتی‌متر',image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',badge:'پرفروش'},
{id:2,name:'کیف ساتن زنجیردار',category:'bag',price:3190000,colors:['کرم','مشکی','زرشکی'],swatches:['#d9c7a5','#171717','#641c2b'],stock:true,dimensions:'۱۸ × ۱۲ × ۵ سانتی‌متر',image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',badge:'جدید'},
{id:3,name:'کفش پاشنه‌بلند کلاسیک',category:'shoe',price:3750000,colors:['مشکی','طلایی'],swatches:['#171717','#c5a04b'],sizes:['۳۶','۳۷','۳۸','۳۹','۴۰'],heel:'۸ سانتی‌متر',stock:true,dimensions:'مناسب سایز استاندارد',image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',badge:'منتخب'},
{id:4,name:'کفش مجلسی بنددار',category:'shoe',price:4250000,colors:['نقره‌ای','مشکی'],swatches:['#c6c8cc','#171717'],sizes:['۳۶','۳۷','۳۸','۳۹'],heel:'۷ سانتی‌متر',stock:false,dimensions:'مناسب سایز استاندارد',image:'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=900&q=85',badge:'ناموجود'}
];
const stockLabel = stock => stock === null ? 'موجودی اعلام نشده' : stock ? 'موجود' : 'ناموجود';
let cart=[];
try { cart=JSON.parse(sessionStorage.getItem('maryamCart') || '[]'); } catch {}
if (!Array.isArray(cart)) cart=[];
let currentFilter='all';const toman=n=>n == null ? 'قیمت اعلام نشده' : n.toLocaleString('fa-IR')+' تومان';
function render(){const list=products.filter(p=>currentFilter==='all'||p.category===currentFilter);document.getElementById('productGrid').innerHTML=list.map(p=>'<article class="product"><a class="product-link" href="product.html?id='+p.id+'"><div class="photo"><img src="'+p.image+'" alt="'+p.name+'" loading="lazy"><span class="tag">'+(p.real ? p.badge : 'نمونه نمایشی')+'</span></div><div class="pbody"><h3>'+p.name+'</h3><div class="sub">'+(p.category==='bag'?'کیف مجلسی':'کفش مجلسی')+'</div><div class="swatches">'+p.swatches.map((c,i)=>'<span class="swatch" title="'+p.colors[i]+'" style="background:'+c+'"></span>').join('')+'</div><div class="price">'+toman(p.price)+'</div><div class="pfoot"><span class="stock '+(!p.stock?'out':'')+'">'+stockLabel(p.stock)+'</span><span class="details">مشخصات محصول ←</span></div></div></a></article>').join('')||'<div class="empty">محصولی در این دسته ثبت نشده است.</div>'}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;render()}));
function showProduct(p){
document.title=p.name+' | کیف و کفش مریم';
document.getElementById('modalImg').alt=p.name;
document.getElementById('productKind').textContent=(p.category==='shoe'?'کفش مجلسی':'کیف مجلسی')+(p.real?'':' · نمونه نمایشی');
document.getElementById('modalImg').src=p.image;document.getElementById('modalName').textContent=p.name;document.getElementById('modalPrice').textContent=toman(p.price);let specs=[['رنگ‌بندی',p.colors.join('، ')],['وضعیت',stockLabel(p.stock)],['ابعاد',p.dimensions]];if(p.spring)specs.push(['نوع فنر',p.spring]);if(p.soleColor)specs.push(['رنگ زیره',p.soleColor]);if(p.category==='shoe')specs.push(['سایزبندی',p.sizes.join('، ') || 'اعلام نشده'],['قد پاشنه',p.heel]);document.getElementById('modalSpecs').innerHTML=specs.map(s=>'<div><b>'+s[0]+'</b>'+s[1]+'</div>').join('');const label=document.getElementById('optionLabel'),sel=document.getElementById('optionSelect');label.textContent=p.category==='shoe' && p.sizes.length?'انتخاب سایز':'انتخاب رنگ';sel.innerHTML=(p.category==='shoe' && p.sizes.length?p.sizes:p.colors).map(v=>'<option>'+v+'</option>').join('');const btn=document.getElementById('addBtn');btn.disabled=!p.stock;btn.style.opacity=p.stock?'1':'.45';btn.textContent=p.stock?'افزودن به سبد خرید':stockLabel(p.stock);btn.onclick=()=>{cart.push({name:p.name,option:sel.value,price:p.price});renderCart();toggleCart()}}
function toggleCart(){document.getElementById('cartPanel').classList.toggle('open')}
function renderCart(){try {sessionStorage.setItem('maryamCart',JSON.stringify(cart))} catch {}
document.getElementById('cartCount').textContent=cart.length;document.getElementById('cartItems').innerHTML=cart.length?cart.map((x,i)=>'<div class="cartline"><span>'+x.name+'<br><small class="muted">'+x.option+'</small></span><span>'+toman(x.price)+'<br><button onclick="cart.splice('+i+',1);renderCart()">حذف</button></span></div>').join(''):'<p class="muted">سبد خرید شما خالی است.</p>';document.getElementById('cartTotal').textContent=cart.length?'جمع کل: '+toman(cart.reduce((a,b)=>a+b.price,0)):''}
const detailPage=document.getElementById('detailPage');
if (detailPage) {
  const id=Number(new URLSearchParams(location.search).get('id'));
  const product=products.find(item=>item.id===id);
  if (product) showProduct(product);
  else detailPage.querySelector('article').textContent='محصول پیدا نشد.';
} else {
  render();
}
renderCart();
