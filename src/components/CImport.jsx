import Swal from 'sweetalert2';
import Button from "@mui/material/Button/Button";
import api from '../api';



export function Importacao() {

    async function sweetAlert() {
      const { value: file } = await Swal.fire({
        title: 'Selecione o Arquivo',
        input: 'file',
        inputAttributes: {
          'accept': 'text/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      
      if (file) {
        var success = false;
        var formData = new FormData();
        formData.append("file", file);
        try {
          await api.post("/news/import", formData)
          success = true;
        } catch (error) {
          console.log("[ERROR] - importContent", error)
        }
        if (success == true) {
          Swal.fire({
            showCloseButton: true,
            background:"#353333",
            howCancelButton: true,
            color:"#fff",
            confirmButtonColor: "#52bcbf",
            title:'Deu tudo certo!',
            text:'O arquivo foi importado com sucesso!',
            icon:'success'
          })
        } else {
          Swal.fire({
            showCloseButton: true,
            background:"#353333",
            color:"#fff",
            iconColor:"#C42A2A",
            icon: 'error',
            title: 'Erro ao importar!',
            text: 'Por favor, tente novamente.',
            confirmButtonColor: "#52bcbf"
          })
        }
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