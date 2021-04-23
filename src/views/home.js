export default () => {
  const viewRegister = '<h1>CHICAS CEREZAS</h1>';
  const reg = document.getElementById('main-login');
  reg.innerHTML = '';
  reg.innerHTML = viewRegister;
  return reg;
};
