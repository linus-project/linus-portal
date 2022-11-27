import Swal from 'sweetalert2';
import Button from "@mui/material/Button/Button";

export function Export(){

    async function selection(){
        const inputOptions = new Promise((resolve) => {
          setTimeout(() => {
            resolve({
             
            })
          }, 1000)
        })
        
        const { value: distribuicao } = await Swal.fire({
          title: 'Selecione a Distribuição',
          input: 'radio',
          inputOptions: inputOptions,
          inputValidator: (value) => {
            if (!value) {
              return 'Você precisa selecionar uma opção'
            }
          }
        })
        
        if (distribuicao) {
          Swal.fire({ html: `Você Selecionou: ${distribuicao}` })
        }
      }

      return(
            <>
                 <Button  style={{
                width: 150,
                backgroundColor: "#9400D3",
                color: "white",
                borderRadius: 10,
                textTransform: "capitalize"}}
                onClick={() => selection()}>Selecionar</Button>
           </>
      );
}


