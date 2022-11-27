import Swal from 'sweetalert2';
import Button from "@mui/material/Button/Button";



export function Importacao() {

    async function sweetAlert() {
      const { value: file } = await Swal.fire({
        title: 'Selecione o Arquivo',
        input: 'file',
        inputAttributes: {
          'accept': 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          Swal.fire({
            title: 'Your uploaded picture',
            imageUrl: e.target.result,
            imageAlt: 'The uploaded picture'
          })
        }
        reader.readAsDataURL(file)
      }
    }
    

    return(
      <>
        <Button  
        style={{
                width: 150,
                backgroundColor: "#9400D3",
                color: "white",
                borderRadius: 10,
                textTransform: "capitalize"}}
                
                onClick={() => sweetAlert()}>Importar</Button>
        </>
    );
    
}