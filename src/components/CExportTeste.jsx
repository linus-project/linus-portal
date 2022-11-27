import Swal from 'sweetalert2';
import Button from "@mui/material/Button/Button";


export function ExportTeste() {

    async function selection(){


    const { value: distr } = await Swal.fire({
        title: 'Exportar',
        html: `
        <label>Selecione Distribuição</a>
        <br> 
        <br>
        <select name="viagem" style="padding:8px 90px 8px 90px" >
            <option value="ubuntu">Selecione</option>
            <option value="ubuntu">Ubuntu</option>
            <option value="fedora">Fedora</option>
            <option value="suse">Suse</option>
            <option value="minte">Minte</option>
            <option value="redhat">Redhat</option>
        </select>`,
        input: 'range',
        inputLabel: 'Quantidade de Conteúdo',
        inputAttributes: {
          min: 1,
          max: 20,
          step: 1
        },
        inputValue: 20
      });
     
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