

const element = document.querySelector('.section')

const opt = {
    margin: 1,
    filename: 'myfile.pdf',
    margin: [0, 0],
    pagebreak: { before: '.before', after: '.after', avoid: '.avoid' },
    image: { type: 'png', quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};

const pdf = () => {
     
    html2pdf().set(opt).from(element).toContainer().toCanvas().toImg().toPdf().save();

}