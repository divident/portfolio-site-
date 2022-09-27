"use strict";(self.webpackChunkportfolio_site=self.webpackChunkportfolio_site||[]).push([[691],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,i=!1,r=0;r<e.length;r++){var o=e[r];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,i=a,a=!0,r++):a&&i&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,r-1)+"-"+e.slice(r-1),i=a,a=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,i=a,a=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return x},P:function(){return y},S:function(){return P},_:function(){return s},a:function(){return n},b:function(){return c},g:function(){return d},h:function(){return l}});var i=a(7294),r=(a(4811),a(5697)),o=a.n(r);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(a=o[i])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,i,r){return void 0===r&&(r={}),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:t?1:0})})}function d(e,t,a,i,r,o,s,l){var c={};o&&(c.backgroundColor=o,"fixed"===a?(c.width=i,c.height=r,c.backgroundColor=o,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var m,p=["children"],u=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:a,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,p);return i.createElement(i.Fragment,null,i.createElement(u,n({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],g=function(e){var t=e.src,a=e.srcSet,r=e.loading,o=e.alt,l=void 0===o?"":o,c=e.shouldLoad,d=s(e,b);return i.createElement("img",n({},d,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,o=e.shouldLoad,l=void 0===o||o,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),m=i.createElement(g,n({},c,t,{sizes:d,shouldLoad:l}));return r.length?i.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return i.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),m):m};g.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var v=["fallback"],y=function(e){var t=e.fallback,a=s(e,v);return t?i.createElement(w,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",n({},a))};y.displayName="Placeholder",y.propTypes={fallback:r.string,sources:null==(m=w.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return i.createElement(i.Fragment,null,i.createElement(w,n({},e)),i.createElement("noscript",null,i.createElement(w,n({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var E,k,N=function(e,t,a){for(var i=arguments.length,r=new Array(i>3?i-3:0),n=3;n<i;n++)r[n-3]=arguments[n];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:o().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],L=new Set,z=function(e){var t=e.as,r=void 0===t?"div":t,o=e.image,c=e.style,d=e.backgroundColor,m=e.className,p=e.class,u=e.onStartLoad,f=e.onLoad,b=e.onError,h=s(e,S),g=o.width,w=o.height,v=o.layout,y=function(e,t,a){var i={},r="gatsby-image-wrapper";return"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i}}(g,w,v),x=y.style,N=y.className,C=s(y,I),z=(0,i.useRef)(),T=(0,i.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);p&&(m=p);var A=function(e,t,a){var i="";return"fullWidth"===e&&(i='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(i='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(v,g,w);return(0,i.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,i=z.current.querySelector("[data-gatsby-image-ssr]");return i&&l()?(i.complete?(null==u||u({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){i.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==u||u({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){i.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(T)):k&&L.has(T)?void 0:(E.then((function(a){var i=a.renderImageToString,r=a.swapPlaceholderImage;z.current&&(z.current.innerHTML=i(n({isLoading:!0,isLoaded:L.has(T),image:o},h)),L.has(T)||(e=requestAnimationFrame((function(){z.current&&(t=r(z.current,T,L,c,u,f,b))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,i.useLayoutEffect)((function(){L.has(T)&&k&&(z.current.innerHTML=k(n({isLoading:L.has(T),isLoaded:L.has(T),image:o},h)),null==u||u({wasCached:!0}),null==f||f({wasCached:!0}))}),[o]),(0,i.createElement)(r,n({},C,{style:n({},x,c,{backgroundColor:d}),className:N+(m?" "+m:""),ref:z,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},T=(0,i.memo)((function(e){return e.image?(0,i.createElement)(z,e):null}));T.propTypes=C,T.displayName="GatsbyImage";var A,j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],_=function(e,t){for(var a=arguments.length,i=new Array(a>2?a-2:0),r=2;r<a;r++)i[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(i)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),q={src:o().string.isRequired,alt:N,width:_,height:_,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(A=T,function(e){var t=e.src,a=e.__imageData,r=e.__error,o=s(e,j);return r&&console.warn(r),a?i.createElement(A,n({image:a},o)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=q},6854:function(e,t,a){a.r(t);var i=a(7294),r=a(7059);t.default=function(){var e=i.useState({}),t=e[0],o=e[1],n=function(e){o((function(t){var a;return Object.assign({},t,((a={})[e.target.name]=e.target.value,a))}))};return i.createElement("div",{className:"text-slate-800"},i.createElement("main",{className:"bg-gradient-to-r from-cyan-500 to-blue-500"},i.createElement("title",null,"Piotr Chmielewski"),i.createElement("section",{className:"px-6 py-12 flex justify-evenly h-screen"},i.createElement("div",{className:"self-center border-1 rounded-lg bg-slate-800 text-white p-3 md:p-6"},i.createElement("h1",{className:"text-xl md:text-4xl capitalize tracking-widest font-bold mb-8 md:md-16",id:"home"},"Hi, I'm Piotr Chmielewski"),i.createElement("p",{className:"text-md md:text-2xl tracking-wide font-semibold max-w-2xl"},"I'm specialized with solving business problems with current technologies. Feel free to contact me using the ",i.createElement("a",{href:"#contact",className:"underline underline-offset-1 text-cyan-500 hover:text-cyan-700"},"form"))),i.createElement("div",null,i.createElement(r.S,{src:"../images/programmer.png",alt:"A programmer",__imageData:a(5907)}))),i.createElement("section",{className:"p-6 mb-6 min-h-[500px]"},i.createElement("h1",{id:"about",className:"text-4xl mb-4 font-semibold"},"About"),i.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-2 md:mt-6"},i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl"},i.createElement("h2",{className:"mb-2 text-xl font-medium"},"Over 4 years experience"),i.createElement("p",null,"I was developing many various things starting from SDN (software defined network) and ending on regular web applications rich in functionality like digital medical clinics, insurance shop and internal applications. Although I am also into marketing, I can also help you monitor your business conversion and introduce analytics tools, to monitor clients behavior.")),i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl"},i.createElement("h2",{className:"mb-2 text-xl font-medium"},"Things I can do for you"),i.createElement("p",null,"I specialized in writing custom applications that meet your needs, when generic templates available on the web fail. I can also help speed up your application by scaling it or doing optimization according to web vitals parameters. Last but not least, I can help with moving your company into a cloud provider like Azure, AWS, GCP as a part of scaling your business.")),i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg hover:shadow-2xl"},i.createElement("h2",{className:"mb-2 text-xl font-medium"},"Keeping your business growing"),i.createElement("p",null,"When your business will grow larger you also need to scale your application. I can help you also with that, because I have experience with scaling applications using cloud providers, so your company can provide service for millions of people around the world! I also have knowledge about marketing and SEO, which helps your company reach more and more people")),i.createElement("div",{className:"justify-self-center text-center"},i.createElement("h2",{className:"mb-2 text-xl text-white font-semibold"},"Cloud deployment"),i.createElement(r.S,{className:"hover:animate-bounce",src:"../images/cloud.svg",alt:"A cloud",height:128,width:128,__imageData:a(6353)})),i.createElement("div",{className:"justify-self-center text-center"},i.createElement("h2",{className:"mb-2 text-xl text-white font-semibold"},"Web application"),i.createElement(r.S,{className:"hover:animate-bounce",src:"../images/website.svg",alt:"An web application",height:128,width:128,__imageData:a(2522)})),i.createElement("div",{className:"justify-self-center text-center"},i.createElement("h2",{className:"mb-2 text-xl text-white font-semibold"},"Marketing"),i.createElement(r.S,{className:"hover:animate-bounce",src:"../images/chart.svg",alt:"A Chart",height:128,width:128,__imageData:a(2069)})))),i.createElement("section",{className:"bg-slate-800 p-6 text-white box relative"},i.createElement("h1",{id:"projects",className:"text-4xl mb-4 font-semibold"},"Projects"),i.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 items-center"},i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full"},i.createElement("h2",{className:"mb-2 text-xl font-medium capitalize"},"Digital clinic"),i.createElement("p",null,"Application helps with running the clinic, main functionality was collecting diagnostic and examination from users devices, shared by doctors. It also has the ability to carry out video and text chat with the patient by doctor. Last but not least there was an option to conduct a survey, it was very useful especially during the pandemic period. There were multiple clients who were using the product and they were really satisfied with it. I was also responsible for a maintenance of the application, to solve bugs reported by user and add new functionalities according to users needs.")),i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full"},i.createElement("h2",{className:"mb-2 text-xl font-medium capitalize"},"Pitkalkulator"),i.createElement("p",null,"It solves the problem of Polish investors, which use revolut because it helps to create yearly statements to calculate tax according to Polish law. It helps a lot of people, at peak there were 200 visits on site per day. It was parsing pdf files provided by revolut and outputting the balance sheet from the investor account. Right now the site is not needed anymore, because revolut introduces csv information for users itself. Source code of the website is still publicly available on ",i.createElement("a",{className:"underline underline-offset-1 text-cyan-500 hover:text-cyan-700",href:"https://github.com/divident/pitkalkulator",target:"_blank"},"github"),", used technologies are flask and next.js,")),i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full"},i.createElement("h2",{className:"mb-2 text-xl font-medium capitalize"},"Campaing App"),i.createElement("p",null,"Application which allows to create campaigns to collect funds in the form of cryptocurrency  using the technology of blockchain. The main benefit of using blockchain to this application is that rules applied to collecting funds are written down in a form of a smart contract and publicly available, so everyone can familiarize oneself with it. Also after deploying no one can modify the contract, so initial rules always apply. The project helps me to get knowledge about the blockchain technology and solidity language, which allows me to write smart contracts, so I can also help clients to utilize blockchain to solve problems. Here is ",i.createElement("a",{className:"underline underline-offset-1 text-cyan-500 hover:text-cyan-700",href:"https://divident.github.io/crowd-found/",target:"_blank"},"link")," to the application.")),i.createElement("div",{className:"bg-slate-800 border-4 border-pink-600 text-white p-4 rounded-lg h-full"},i.createElement("h2",{className:"mb-2 text-xl font-medium capitalize"},"Pomodoro App"),i.createElement("p",null,"A pomodoro application helps to make short or longer breaks during work periods. The idea is based on a time management method developed by Francesco Cirillo. It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. The application has rich customization settings allowing for changing theme color and font You can try it here ",i.createElement("a",{className:"underline underline-offset-1 text-cyan-500 hover:text-cyan-700",href:"http://ec2-18-116-74-88.us-east-2.compute.amazonaws.com/pomodoro/",target:"_blank"},"link")," to the application.")))),i.createElement("section",{className:"p-6"},i.createElement("div",{className:"bg-slate-800 p-4 w-full md:w-1/2 text-white mx-auto rounded-lg"},i.createElement("h1",{id:"contact",className:"text-4xl mb-4 font-semibold"},"Contact"),i.createElement("form",{id:"contactForm"},i.createElement("div",{className:"mb-4"},i.createElement("label",{className:"block font-bold mb-2",htmlFor:"subject"},"Subject"),i.createElement("input",{onChange:n,className:"hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight invalid:outline-red-500 invalid:outline-2",type:"subject",name:"subject",id:"subject",required:!0})),i.createElement("div",{className:"mb-4"},i.createElement("label",{className:"block font-bold mb-2",htmlFor:"content"},"Content"),i.createElement("textarea",{onChange:n,className:"hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight nvalid:outline-red-500 invalid:outline-2",id:"content",name:"content",rows:5,cols:33,placeholder:"Enter your question/requirements here",required:!0})),i.createElement("div",null,i.createElement("button",{className:"bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded",type:"submit",onClick:function(e){e.preventDefault(),console.log(JSON.stringify(t)),window.location.href="mailto:pchmielewski.projects@gmail.com?subject="+t.subject+"&body="+t.content}},"Submit")))))))}},2522:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/b4c06/website.svg","srcSet":"/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/27e2e/website.svg 32w,\\n/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/cd728/website.svg 64w,\\n/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/b4c06/website.svg 128w,\\n/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/ade80/website.svg 256w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/ef6ff/website.webp 32w,\\n/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/8257c/website.webp 64w,\\n/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/6766a/website.webp 128w,\\n/portfolio-site/static/b802042af89aee8308b3e81c64516b9d/22bfc/website.webp 256w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')},5907:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/ccc41/programmer.png","srcSet":"/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/bf8e1/programmer.png 128w,\\n/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/acb7c/programmer.png 256w,\\n/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/ccc41/programmer.png 512w","sizes":"(min-width: 512px) 512px, 100vw"},"sources":[{"srcSet":"/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/6766a/programmer.webp 128w,\\n/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/22bfc/programmer.webp 256w,\\n/portfolio-site/static/8a2546b8f83a10ac88701beb6f037128/d689f/programmer.webp 512w","type":"image/webp","sizes":"(min-width: 512px) 512px, 100vw"}]},"width":512,"height":512}')},6353:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/b4c06/cloud.svg","srcSet":"/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/27e2e/cloud.svg 32w,\\n/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/cd728/cloud.svg 64w,\\n/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/b4c06/cloud.svg 128w,\\n/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/ade80/cloud.svg 256w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/ef6ff/cloud.webp 32w,\\n/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/8257c/cloud.webp 64w,\\n/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/6766a/cloud.webp 128w,\\n/portfolio-site/static/4ceca17f20b5fb8790f1e2049fe4bd53/22bfc/cloud.webp 256w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')},2069:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#88d8a8","images":{"fallback":{"src":"/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/b4c06/chart.svg","srcSet":"/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/27e2e/chart.svg 32w,\\n/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/cd728/chart.svg 64w,\\n/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/b4c06/chart.svg 128w,\\n/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/ade80/chart.svg 256w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/ef6ff/chart.webp 32w,\\n/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/8257c/chart.webp 64w,\\n/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/6766a/chart.webp 128w,\\n/portfolio-site/static/d965d29b244eb1f771ceff1dd6a4e260/22bfc/chart.webp 256w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a1f111be94a794bd0082.js.map