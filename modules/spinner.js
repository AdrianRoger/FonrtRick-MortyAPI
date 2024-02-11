export default function spinner(){
  const spinnerBack = document.createElement('div');
  spinnerBack.classList.add('spinner-back');

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');

  const spinnerCenter = document.createElement('div');
  spinnerCenter.classList.add('spinner-center');

  spinner.appendChild(spinnerCenter);
  spinnerBack.appendChild(spinner);
  
  return spinnerBack;
}
