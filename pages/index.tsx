import { Button, Flex, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import  React  from "react"
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useBeforeunload } from 'react-beforeunload';

function Home() {


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tell, setTell] = useState('');


  function submit(event) {
    event.preventDefault();

    console.log('Nome: ', nome);
    console.log('Email: ', email);
    console.log('Tell: ', tell);
  }

  function segurar () {

    const janela = window.closed;
    if(!janela )

    // e.preventDefault();
    useBeforeunload(() => {
      console.log("taeeeste")
      return alert("aaaaaaaaah")
    })
  }





 





  useEffect(() => {
    //console.log("este é meu valor: ", window.closed)
    //window.addEventListener("beforeunload", );
    // if(!window.closed) {
    //   console.log("ta abertooo!")
    // } else {
    //   console.log("fechou!!")
    //   alert("fechooooou!")
    // }

    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
      var confirmationMessage = "\o/";
      
      e.returnValue = confirmationMessage;     
      alert("fooooo!!")
      return confirmationMessage;              
    });

    // function teste(e) {
      
    //   console.log("teste")
    //   const confirmationMessage = "teeeste";
    //   return confirmationMessage;
    // }

    // window.addEventListener("beforeunload", function(){
    //   // console.log("teste")
    //   const confirmationMessage = "teeeste";
    //   return confirmationMessage;
    // });


//     let areYouReallySure = false;
//     function areYouSure() {
//       if (allowPrompt) {
//         if(!areYouReallySure && true) {
//           areYouReallySure = true;
//           let confMessage = "aaaaah";
//           return confMessage;
//         }
//       } else {
//         allowPrompt = true;
//       }
//     }

//     let allowPrompt = true;

    
//     window.addEventListener("beforeunload", function (e) {
//       e.preventDefault()
      
//       window.onbeforeunload = areYouSure;
// })

      // return () => {
      //   window.removeEventListener("beforeunload", teste)
      // }
  });


  return (
    <Flex direction={'column'} align={'center'} justify={'center'} height={'100vh'}>
      <h2>Form teste</h2>
      <FormControl onSubmit={(e) => submit(e)}>
        <Flex direction={'column'}>
          <FormLabel htmlFor='nome'>Name:</FormLabel>
          <Input id='nome' type='textarea' value={nome} onChange={(e) => setNome(e.target.value)} />
          <FormLabel htmlFor='email'>E-mail</FormLabel>
          <Input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel htmlFor='tel'>Telefone:</FormLabel>
          <Input id='tel' type='number' value={tell} onChange={(e) => setTell(e.target.value)} />
        </Flex>
        <Button>Send</Button>
      </FormControl>
    </Flex>
  )
}

export default Home
