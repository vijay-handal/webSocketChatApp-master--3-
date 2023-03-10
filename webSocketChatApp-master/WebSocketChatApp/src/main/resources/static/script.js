// var stompClient = null
// function connect(){

//     let socket = new SockJS("/server1")

//     stompClient = Stomp.over(socket)

//     stompClient.connect({},function(frame){
//         console.log("connected :"+frame)
//         $("#name-from").addClass('d-none')
//         $("#chat-room").removeClass('d-none')

//         stompClient.subscribe("/topic/return-to",function(responce){
//             showMessage(JSON.parse(responce.body))
//         })
//     })

// }

// function sendMessage(){
//     let jsonObj = {
//         name:document.getElementById("name-title").innerText,
//         content:$("#message-value").val()
//     }
//     stompClient.send("/app/message",{},JSON.stringify(jsonObj));
// }

// function showMessage(message){
// $("#meassage-container-table").prepend(`<tr><td><b>${message.name}: <b>${message.content}</td></tr>`)
// }
// $(document).ready(e=>{
//    $("#login").click(()=>{
//     let name = $("#name-value").val()
//     localStorage.setItem("name",name)
//     $("#name-title").text(name)
//     connect();
//    })
//    $("#send").click(()=>{
    
//     sendMessage();
//    })
//    $("#logout").click(()=>{
//     localStorage.removeItem("name")
//     if(stompClient!=null){
//         stompClient.disconnect()
//         $("#name-from").removeClass('d-none')
//         $("#chat-room").addClass('d-none')
//     }
//    })
// })

// Audio Web Socket Application.......................
// $(document).ready(e=>{
//     $("#button").click(()=>{
//         var speech = true;
//             window.SpeechRecognition = window.webkitSpeechRecognition;
//             const recognition = new SpeechRecognition();
//             recognition.interimResult = true;

//             recognition.addEventListener('result',e=>{
// 				console.log(e);
//                 const transcript = Array.from(e.results)
//                 .map(result => result[0])
//                 .map(result => result.transcript)

//                 console.log(transcript);
//                 document.getElementById("convert_text").innerHTML = transcript; 
//             });

//             if(speech == true){
//                 recognition.start();
        
//             }
//     })
    
//  })

$(document).ready(e=>{
    $("#button").click(()=>{
        console.log("happy1");
        successCallback(null);
        function successCallback(stream) {
            console.log("happy2");
            const video = document.querySelector("video");
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
              // Do something with the video here.
              console.log("happy3");
            };
          }
    })
});
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    (stream) => {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    },
    (err) => {
      console.error(`The following error occurred: ${err.name}`);
    }
  );
} else {
  console.log("getUserMedia not supported");
}// document.getElementById("button").addEventListener('Click',function(){
//     var speech = true;
//     window.SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.interimResult = true;
//     if(speech == true){
//         recognition.start();

//     }
// })

