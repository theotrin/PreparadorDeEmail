function enviar(){
    let final = document.querySelector("#bottom")

    let emailCordenador = document.querySelector("#nomeCordenador") 
    let cordenadorEscolhido = emailCordenador.options[emailCordenador.selectedIndex].text

    let email = escolherEmailIntitussional(cordenadorEscolhido)

    

    let disciplina = document.querySelector("#disciplina").value
    
    let sexoProfessor = document.querySelector("#sexoInstrutor")
    let ProfessorOuProfessora = sexoProfessor.options[sexoProfessor.selectedIndex].text

    let date = new Date()
    let horas = date.getHours()
    let cortesia = BomDiaTardeNoite(horas)

    let docente = OouA(ProfessorOuProfessora)

    let NomeDocente = document.querySelector("#NomeDocente").value
    let NomeDisciplina = document.querySelector("#disciplina").value

    let Cursos = document.querySelector("#TecnicoEm")
    let OpcoesCursos = Cursos.options[Cursos.selectedIndex].text

    let Tec = QualTecnico(OpcoesCursos)

    let horarioDiv = document.querySelector("#HoraAula")
    let cargaHoraria = horarioDiv.options[horarioDiv.selectedIndex].text 

    let DataInicioAmericana = document.querySelector("#DataInicio").value
    let DataInicio = DataInicioAmericana.split('-').reverse().join('/')

    let DataFimAmericana = document.querySelector("#DataFim").value
    let DataFim = DataFimAmericana.split('-').reverse().join('/')

    final.innerHTML = ` 
    
    <p> Para: ${email} </p>
    
    <h2> Assunto: Documentação ${docente} ${NomeDocente} da disciplina: ${NomeDisciplina} do ${Tec}  </h2>

    <p> ${cortesia}
        <br>
        Segue em Anexo a documentação ${docente}: <strong>${NomeDocente}</strong> para ministrar a disciplina: ${NomeDisciplina} (${cargaHoraria}) no periodo de <strong>${DataInicio}</strong> a <strong>${DataFim}</strong>
        <br><br>
        <strong>
            Atenciosamente,
            <br><br><br>
            
            
            Adrião Cavalcante Rocha Neto
            <br>
            Analista Técnico Educacional
            <br>
            CETAM – Itacoatiara
            <br>
            99189 3695
        </strong>


    </p>
    
    `
}

function BomDiaTardeNoite(horario){
    if (horario >=0 && horario <= 12){
        return horario = 'bom dia'
    }else if (horario >= 12 && horario <=18){
        return horario = 'boa tarde'
    }else{
        return horario = 'boa noite'
    }

}

function OouA(instrutor){

    if(instrutor === 'professor'){
         return ProfessorOuProfessora = 'do Professor'
   }else{
    return ProfessorOuProfessora = 'da Professora'
   }
}

function QualTecnico(NomeCurso){
    if(NomeCurso === 'Geoprocessamento'){
        return NomeCurso = 'Curso Tecnico em Geoprocessamento'
    }else if (NomeCurso === 'Eletrotecnica'){
        return NomeCurso = 'Curso Tecnico em Eletrotecnica'
    }else if (NomeCurso === 'Nutrição'){
        return NomeCurso = 'Curso Tecnico em Nutrição'
    }else if (NomeCurso === 'Serviços Juridicos'){
        return NomeCurso = 'Curso Tecnico em Serviços Juridicos'
    }else if (NomeCurso === 'Gastronomia'){
        return NomeCurso = 'Curso Tecnico em Gastronomia'
    }else if (NomeCurso === '(RH)Recursos Humanos'){
        return NomeCurso = 'Curso Tecnico em Recursos Humanos'
    }else if (NomeCurso === 'Refrigeração'){
        return NomeCurso = 'Curso Tecnico em Refrigeração'
    }else if (NomeCurso === 'Enfermagem'){
        return NomeCurso = 'Curso Tecnico em Enfermagem'
    }else if (NomeCurso === 'Enfermagem'){
        return NomeCurso = 'Curso Tecnico em Enfermagem'
    }else{
        return
    }
}

function escolherEmailIntitussional(nome){
    if (nome === 'Maria Emilia'){
        return 'maria.freitas@edu.cetam.am.gov.br'
    }else if (nome === 'Deborah Tavares'){
        return 'deborah.tavares@edu.cetam.am.gov.br'
}else if (nome === 'Ires Silva'){
    return 'ires.silva@cetam.am.gov.br'
}else if (nome === 'Mauro'){
    return 'mauro.lima@edu.cetam.am.gov.br'
}else if (nome === 'Greciane Rossetti'){
    return 'greciane.rossetti@edu.cetam.am.gov.br'
}




}

