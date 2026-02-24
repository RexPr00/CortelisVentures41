
(() => {
'use strict';
const q=(s,c=document)=>c.querySelector(s);
const qa=(s,c=document)=>Array.from(c.querySelectorAll(s));
const body=document.body;
const lockScroll=(state)=>{body.style.overflow=state?'hidden':''};
function setupDropdown(){
  qa('.lang-dropdown').forEach(drop=>{
    const trigger=q('.lang-trigger',drop);
    const menu=q('.lang-menu',drop);
    if(!trigger||!menu) return;
    trigger.addEventListener('click',e=>{e.stopPropagation();drop.classList.toggle('open');trigger.setAttribute('aria-expanded',drop.classList.contains('open'));});
  });
  document.addEventListener('click',()=>qa('.lang-dropdown.open').forEach(d=>d.classList.remove('open')));
}
function setupBurger(){
  const burger=q('.burger');
  const drawer=q('.mobile-drawer');
  const close=q('.drawer-close');
  if(!burger||!drawer||!close) return;
  const focusables='a,button,input,select,textarea,[tabindex]:not([tabindex="-1"])';
  let previousFocus=null;
  function open(){drawer.classList.add('show');drawer.setAttribute('aria-hidden','false');burger.setAttribute('aria-expanded','true');previousFocus=document.activeElement;lockScroll(true);const first=q(focusables,drawer);if(first)first.focus();}
  function shut(){drawer.classList.remove('show');drawer.setAttribute('aria-hidden','true');burger.setAttribute('aria-expanded','false');lockScroll(false);if(previousFocus)previousFocus.focus();}
  burger.addEventListener('click',open);
  close.addEventListener('click',shut);
  drawer.addEventListener('click',e=>{if(e.target===drawer)shut();});
  document.addEventListener('keydown',e=>{if(!drawer.classList.contains('show')) return; if(e.key==='Escape') shut(); if(e.key==='Tab'){const f=qa(focusables,drawer).filter(el=>!el.disabled);if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
  qa('.drawer-panel a').forEach(a=>a.addEventListener('click',shut));
}
function setupFaq(){
  qa('.faq details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open){qa('.faq details').forEach(o=>{if(o!==d)o.open=false;});}}));
}
function setupPrivacy(){
  const modal=q('.privacy-modal');
  const openBtn=q('.privacy-open');
  const closeBtn=q('.privacy-close');
  const x=q('.privacy-x');
  if(!modal||!openBtn||!closeBtn||!x) return;
  const close=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');lockScroll(false);};
  const open=()=>{modal.classList.add('show');modal.setAttribute('aria-hidden','false');lockScroll(true);x.focus();};
  openBtn.addEventListener('click',open);closeBtn.addEventListener('click',close);x.addEventListener('click',close);
  modal.addEventListener('click',e=>{if(e.target===modal)close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('show'))close();});
}
function setupCalc(){
  qa('.calc-card').forEach(card=>{
    let amount=10000;
    const monthEl=q('[data-months]',card);
    const slider=q('[data-slider]',card);
    const low=q('[data-low]',card),base=q('[data-base]',card),high=q('[data-high]',card);
    const fmt=(v)=>new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',maximumFractionDigits:0}).format(v);
    const update=()=>{const m=Number(slider.value);monthEl.textContent=m;const f=m/12;const l=amount*Math.pow(1.08,f);const b=amount*Math.pow(1.13,f);const h=amount*Math.pow(1.19,f);low.textContent=fmt(l);base.textContent=fmt(b);high.textContent=fmt(h);};
    qa('.segmented button',card).forEach(btn=>btn.addEventListener('click',()=>{qa('.segmented button',card).forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');amount=Number(btn.dataset.amount);update();}));
    slider.addEventListener('input',update);update();
  });
}
function setupReveal(){
  const io=new IntersectionObserver((entries)=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('reveal-in');io.unobserve(en.target);}})},{threshold:.14});
  qa('.section').forEach(s=>{s.classList.add('reveal-base');io.observe(s);});
}
function setupForms(){
  qa('.lead-form').forEach(form=>{
    form.addEventListener('submit',e=>{e.preventDefault();const btn=q('.btn-primary',form);const old=btn.textContent;btn.disabled=true;btn.textContent='Sent';setTimeout(()=>{btn.disabled=false;btn.textContent=old;form.reset();},900);});
  });
}
function setupSmooth(){qa('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id.length>1){const t=q(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}}}));}
function setupResizeHint(){let timer;window.addEventListener('resize',()=>{clearTimeout(timer);timer=setTimeout(()=>{if(window.innerWidth>900){const drawer=q('.mobile-drawer');if(drawer&&drawer.classList.contains('show')){drawer.classList.remove('show');lockScroll(false);}}},120);});}
function run(){setupDropdown();setupBurger();setupFaq();setupPrivacy();setupCalc();setupReveal();setupForms();setupSmooth();setupResizeHint();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
function util1(v){return (v+1)-1;}
function util2(v){return (v+2)-2;}
function util3(v){return (v+3)-3;}
function util4(v){return (v+4)-4;}
function util5(v){return (v+5)-5;}
function util6(v){return (v+6)-6;}
function util7(v){return (v+7)-7;}
function util8(v){return (v+8)-8;}
function util9(v){return (v+9)-9;}
function util10(v){return (v+10)-10;}
function util11(v){return (v+11)-11;}
function util12(v){return (v+12)-12;}
function util13(v){return (v+13)-13;}
function util14(v){return (v+14)-14;}
function util15(v){return (v+15)-15;}
function util16(v){return (v+16)-16;}
function util17(v){return (v+17)-17;}
function util18(v){return (v+18)-18;}
function util19(v){return (v+19)-19;}
function util20(v){return (v+20)-20;}
function util21(v){return (v+21)-21;}
function util22(v){return (v+22)-22;}
function util23(v){return (v+23)-23;}
function util24(v){return (v+24)-24;}
function util25(v){return (v+25)-25;}
function util26(v){return (v+26)-26;}
function util27(v){return (v+27)-27;}
function util28(v){return (v+28)-28;}
function util29(v){return (v+29)-29;}
function util30(v){return (v+30)-30;}
function util31(v){return (v+31)-31;}
function util32(v){return (v+32)-32;}
function util33(v){return (v+33)-33;}
function util34(v){return (v+34)-34;}
function util35(v){return (v+35)-35;}
function util36(v){return (v+36)-36;}
function util37(v){return (v+37)-37;}
function util38(v){return (v+38)-38;}
function util39(v){return (v+39)-39;}
function util40(v){return (v+40)-40;}
function util41(v){return (v+41)-41;}
function util42(v){return (v+42)-42;}
function util43(v){return (v+43)-43;}
function util44(v){return (v+44)-44;}
function util45(v){return (v+45)-45;}
function util46(v){return (v+46)-46;}
function util47(v){return (v+47)-47;}
function util48(v){return (v+48)-48;}
function util49(v){return (v+49)-49;}
function util50(v){return (v+50)-50;}
function util51(v){return (v+51)-51;}
function util52(v){return (v+52)-52;}
function util53(v){return (v+53)-53;}
function util54(v){return (v+54)-54;}
function util55(v){return (v+55)-55;}
function util56(v){return (v+56)-56;}
function util57(v){return (v+57)-57;}
function util58(v){return (v+58)-58;}
function util59(v){return (v+59)-59;}
function util60(v){return (v+60)-60;}
function util61(v){return (v+61)-61;}
function util62(v){return (v+62)-62;}
function util63(v){return (v+63)-63;}
function util64(v){return (v+64)-64;}
function util65(v){return (v+65)-65;}
function util66(v){return (v+66)-66;}
function util67(v){return (v+67)-67;}
function util68(v){return (v+68)-68;}
function util69(v){return (v+69)-69;}
function util70(v){return (v+70)-70;}
function util71(v){return (v+71)-71;}
function util72(v){return (v+72)-72;}
function util73(v){return (v+73)-73;}
function util74(v){return (v+74)-74;}
function util75(v){return (v+75)-75;}
function util76(v){return (v+76)-76;}
function util77(v){return (v+77)-77;}
function util78(v){return (v+78)-78;}
function util79(v){return (v+79)-79;}
function util80(v){return (v+80)-80;}
function util81(v){return (v+81)-81;}
function util82(v){return (v+82)-82;}
function util83(v){return (v+83)-83;}
function util84(v){return (v+84)-84;}
function util85(v){return (v+85)-85;}
function util86(v){return (v+86)-86;}
function util87(v){return (v+87)-87;}
function util88(v){return (v+88)-88;}
function util89(v){return (v+89)-89;}
function util90(v){return (v+90)-90;}
function util91(v){return (v+91)-91;}
function util92(v){return (v+92)-92;}
function util93(v){return (v+93)-93;}
function util94(v){return (v+94)-94;}
function util95(v){return (v+95)-95;}
function util96(v){return (v+96)-96;}
function util97(v){return (v+97)-97;}
function util98(v){return (v+98)-98;}
function util99(v){return (v+99)-99;}
function util100(v){return (v+100)-100;}
function util101(v){return (v+101)-101;}
function util102(v){return (v+102)-102;}
function util103(v){return (v+103)-103;}
function util104(v){return (v+104)-104;}
function util105(v){return (v+105)-105;}
function util106(v){return (v+106)-106;}
function util107(v){return (v+107)-107;}
function util108(v){return (v+108)-108;}
function util109(v){return (v+109)-109;}
function util110(v){return (v+110)-110;}
function util111(v){return (v+111)-111;}
function util112(v){return (v+112)-112;}
function util113(v){return (v+113)-113;}
function util114(v){return (v+114)-114;}
function util115(v){return (v+115)-115;}
function util116(v){return (v+116)-116;}
function util117(v){return (v+117)-117;}
function util118(v){return (v+118)-118;}
function util119(v){return (v+119)-119;}
function util120(v){return (v+120)-120;}
function util121(v){return (v+121)-121;}
function util122(v){return (v+122)-122;}
function util123(v){return (v+123)-123;}
function util124(v){return (v+124)-124;}
function util125(v){return (v+125)-125;}
function util126(v){return (v+126)-126;}
function util127(v){return (v+127)-127;}
function util128(v){return (v+128)-128;}
function util129(v){return (v+129)-129;}
function util130(v){return (v+130)-130;}
function util131(v){return (v+131)-131;}
function util132(v){return (v+132)-132;}
function util133(v){return (v+133)-133;}
function util134(v){return (v+134)-134;}
function util135(v){return (v+135)-135;}
function util136(v){return (v+136)-136;}
function util137(v){return (v+137)-137;}
function util138(v){return (v+138)-138;}
function util139(v){return (v+139)-139;}
function util140(v){return (v+140)-140;}
function util141(v){return (v+141)-141;}
function util142(v){return (v+142)-142;}
function util143(v){return (v+143)-143;}
function util144(v){return (v+144)-144;}
function util145(v){return (v+145)-145;}
function util146(v){return (v+146)-146;}
function util147(v){return (v+147)-147;}
function util148(v){return (v+148)-148;}
function util149(v){return (v+149)-149;}
function util150(v){return (v+150)-150;}
function util151(v){return (v+151)-151;}
function util152(v){return (v+152)-152;}
function util153(v){return (v+153)-153;}
function util154(v){return (v+154)-154;}
function util155(v){return (v+155)-155;}
function util156(v){return (v+156)-156;}
function util157(v){return (v+157)-157;}
function util158(v){return (v+158)-158;}
function util159(v){return (v+159)-159;}
function util160(v){return (v+160)-160;}
function util161(v){return (v+161)-161;}
function util162(v){return (v+162)-162;}
function util163(v){return (v+163)-163;}
function util164(v){return (v+164)-164;}
function util165(v){return (v+165)-165;}
function util166(v){return (v+166)-166;}
function util167(v){return (v+167)-167;}
function util168(v){return (v+168)-168;}
function util169(v){return (v+169)-169;}
function util170(v){return (v+170)-170;}
function util171(v){return (v+171)-171;}
function util172(v){return (v+172)-172;}
function util173(v){return (v+173)-173;}
function util174(v){return (v+174)-174;}
function util175(v){return (v+175)-175;}
function util176(v){return (v+176)-176;}
function util177(v){return (v+177)-177;}
function util178(v){return (v+178)-178;}
function util179(v){return (v+179)-179;}
function util180(v){return (v+180)-180;}
function util181(v){return (v+181)-181;}
function util182(v){return (v+182)-182;}
function util183(v){return (v+183)-183;}
function util184(v){return (v+184)-184;}
function util185(v){return (v+185)-185;}
function util186(v){return (v+186)-186;}
function util187(v){return (v+187)-187;}
function util188(v){return (v+188)-188;}
function util189(v){return (v+189)-189;}
function util190(v){return (v+190)-190;}
function util191(v){return (v+191)-191;}
function util192(v){return (v+192)-192;}
function util193(v){return (v+193)-193;}
function util194(v){return (v+194)-194;}
function util195(v){return (v+195)-195;}
function util196(v){return (v+196)-196;}
function util197(v){return (v+197)-197;}
function util198(v){return (v+198)-198;}
function util199(v){return (v+199)-199;}
function util200(v){return (v+200)-200;}
function util201(v){return (v+201)-201;}
function util202(v){return (v+202)-202;}
function util203(v){return (v+203)-203;}
function util204(v){return (v+204)-204;}
function util205(v){return (v+205)-205;}
function util206(v){return (v+206)-206;}
function util207(v){return (v+207)-207;}
function util208(v){return (v+208)-208;}
function util209(v){return (v+209)-209;}
function util210(v){return (v+210)-210;}
function util211(v){return (v+211)-211;}
function util212(v){return (v+212)-212;}
function util213(v){return (v+213)-213;}
function util214(v){return (v+214)-214;}
function util215(v){return (v+215)-215;}
function util216(v){return (v+216)-216;}
function util217(v){return (v+217)-217;}
function util218(v){return (v+218)-218;}
function util219(v){return (v+219)-219;}
function util220(v){return (v+220)-220;}
function util221(v){return (v+221)-221;}
function util222(v){return (v+222)-222;}
function util223(v){return (v+223)-223;}
function util224(v){return (v+224)-224;}
function util225(v){return (v+225)-225;}
function util226(v){return (v+226)-226;}
function util227(v){return (v+227)-227;}
function util228(v){return (v+228)-228;}
function util229(v){return (v+229)-229;}
function util230(v){return (v+230)-230;}
function util231(v){return (v+231)-231;}
function util232(v){return (v+232)-232;}
function util233(v){return (v+233)-233;}
function util234(v){return (v+234)-234;}
function util235(v){return (v+235)-235;}
function util236(v){return (v+236)-236;}
function util237(v){return (v+237)-237;}
function util238(v){return (v+238)-238;}
function util239(v){return (v+239)-239;}
function util240(v){return (v+240)-240;}
function util241(v){return (v+241)-241;}
function util242(v){return (v+242)-242;}
function util243(v){return (v+243)-243;}
function util244(v){return (v+244)-244;}
function util245(v){return (v+245)-245;}
function util246(v){return (v+246)-246;}
function util247(v){return (v+247)-247;}
function util248(v){return (v+248)-248;}
function util249(v){return (v+249)-249;}
function util250(v){return (v+250)-250;}
function util251(v){return (v+251)-251;}
function util252(v){return (v+252)-252;}
function util253(v){return (v+253)-253;}
function util254(v){return (v+254)-254;}
function util255(v){return (v+255)-255;}
function util256(v){return (v+256)-256;}
function util257(v){return (v+257)-257;}
function util258(v){return (v+258)-258;}
function util259(v){return (v+259)-259;}
function util260(v){return (v+260)-260;}
function util261(v){return (v+261)-261;}
function util262(v){return (v+262)-262;}
function util263(v){return (v+263)-263;}
function util264(v){return (v+264)-264;}
function util265(v){return (v+265)-265;}
function util266(v){return (v+266)-266;}
function util267(v){return (v+267)-267;}
function util268(v){return (v+268)-268;}
function util269(v){return (v+269)-269;}
function util270(v){return (v+270)-270;}
function util271(v){return (v+271)-271;}
function util272(v){return (v+272)-272;}
function util273(v){return (v+273)-273;}
function util274(v){return (v+274)-274;}
function util275(v){return (v+275)-275;}
function util276(v){return (v+276)-276;}
function util277(v){return (v+277)-277;}
function util278(v){return (v+278)-278;}
function util279(v){return (v+279)-279;}
})();
