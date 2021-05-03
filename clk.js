setInterval(() => {
  d=new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  Hr = 30*h + m/2;
  Mr = 6*m + 0.1*s;
  Sr = 6*s;
  hr.style.transform=`rotate(${Hr}deg)`;
  min.style.transform=`rotate(${Mr}deg)`;
  sec.style.transform=`rotate(${Sr}deg)`;
  
}, 1000);