(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[522],{8347:function(e,s,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/favorite",function(){return A(3972)}])},9157:function(e,s){"use strict";s.Z={src:"/react-joara-front/_next/static/media/preview.ceb96345.jpg",height:465,width:300,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAArAK//8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIAAyEjMUH/2gAIAQEAAT8AWo98ej0z/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:5,blurHeight:8}},3254:function(e,s,A){"use strict";var l=A(5893);A(7294);let a=e=>{let s="flex flex-row cursor-pointer border rounded-md p-2 px-4 gap-2 hover:bg-main hover:text-main-contra",A="flex justify-center items-center gap-8",{allCount:a}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"flex flex-row items-center justify-start gap-2",children:[(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("p",{className:"",children:"전체"}),(0,l.jsx)("span",{className:A,children:null!=a?a:0})]}),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("p",{className:"",children:"연재"}),(0,l.jsx)("span",{className:A,children:null!=a?a:0})]}),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("p",{className:"",children:"완결"}),(0,l.jsx)("span",{className:A,children:null!=a?a:0})]})]})})};s.Z=a},3972:function(e,s,A){"use strict";A.r(s),A.d(s,{default:function(){return N}});var l=A(5893);A(7294);var a=A(5675),t=A.n(a),r=A(1163),n=A(7935),c=A(9157),i=A(8929);let x=e=>{let{memberFavorBookList:s}=e,A=(0,r.useRouter)(),{BOOK:a}=n.Z;return(0,l.jsx)("ul",{className:"flex flex-col gap-4",children:null==s?void 0:s.map(e=>(0,l.jsxs)("li",{className:"flex flex-row items-center justify-start gap-4 p-4 border rounded-md shadow-md border-default hover:border-main",onClick:()=>{var s;A.push({pathname:a+"/"+e.bookId})},children:[(0,l.jsx)(t(),{className:"max-w-[100px] max-h-[150px] min-w-[100px] min-h-[150px]",width:100,height:150,src:e.coverUrl?e.coverUrl:c.Z,alt:"".concat(e.bookTitle," 이미지")}),(0,l.jsxs)("section",{className:"flex flex-col items-start justify-between flex-1 gap-2",children:[(0,l.jsx)("div",{className:"flex justify-between w-full",children:(0,l.jsxs)("div",{className:"flex flex-col items-start justify-start",children:[(0,l.jsxs)("p",{className:"flex flex-row items-center gap-2 font-bold",children:[(0,l.jsx)("span",{className:"text-xl ",children:e.bookTitle}),(0,l.jsx)("span",{className:"text-main",children:e.nickname})]}),(0,l.jsx)("p",{className:"flex flex-row gap-1 text-default",children:(0,l.jsx)("span",{children:e.createdAt})})]})}),(0,l.jsx)("ul",{className:"flex flex-row items-center justify-start gap-2",children:e.genreIdList.map(e=>(0,l.jsx)("li",{className:"px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra",children:i.Q8[e]},"favorite-genre-".concat(e)))})]})]},"favor-book-".concat(e.id)))})};var o=A(3254),d=A(7848),m=A(8742),f=A(609),h=A(6991);let{API_BOOK_FAVOR:u}=f.Z,j=async()=>{let{data:e}=await m._i.get("".concat(u));return e},p=()=>(0,d.a)({queryKey:[h.Hx],queryFn:()=>j()}),g=()=>{let{data:{memberFavorBookList:e,lastPage:s}={}}=p();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("section",{className:"flex flex-row items-center justify-between",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"내 선호작"}),(0,l.jsx)("div",{className:"flex flex-row items-center justify-between",children:(0,l.jsx)(o.Z,{allCount:null==e?void 0:e.length})})]}),(0,l.jsx)("section",{className:"flex flex-col w-full gap-4",children:(0,l.jsx)(x,{memberFavorBookList:e})})]})},w=()=>(0,l.jsx)("div",{className:"flex items-center justify-center w-full p-8",children:(0,l.jsx)("section",{className:"w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md",children:(0,l.jsx)(g,{})})});var N=w}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8347)}),_N_E=e.O()}]);