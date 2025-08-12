

// function checkDay(){
//     let days = document.getElementById("dayInput").value.toLowerCase();
//     let message = '';
//     switch (days) {
//         case 'monday':
//           message = 'This is a Working Day, Go to work!'   
//             break;
//             case 'tuesday':
//           message = 'This is a Working Day, Go to work!'   
//             break;   
//              case 'wednesday':
//           message = 'This is a Working Day, Go to work!'   
//             break;     
//            case 'thursday':
//           message = 'Yayy! Weekend is Near, But Not today. Go to Work!'   
//             break; 
//            case 'friday':
//           message = 'It’s just a half Day, Go to work!'   
//             break;   
//          case 'saturday':
//           message = 'It’s almost a weekend'   
//             break;
//              case 'sunday':
//           message = 'Today is Netflix and chill!'   
//             break;
//         default:
//             message = 'It’s not a valid day name! Try Again'
//             break;
//     }
//      document.getElementById('output').innerText=message
// }

function checkDay() {
    let days = document.getElementById('dayInput').value.toLowerCase();
    let message = '';
    switch (days){
        case "monday":
            message = '💼 This is a Working Day, Go to work!';
            break;
        case "tuesday":
            message = '💼 This is also Working Day, Go to work!';
            break;
        case "wednesday":
            message = '💼 This is also Working Day, Go to work!';
            break;
        case "thursday":
            message = '🎉 Weekend is near, but not today. Go to Work!';
            break;
        case "friday":
            message = '⏳ Just a half day left, Go to work!';
            break;
        case "saturday":
            message = '🌤 It’s almost the weekend!';
            break;
        case "sunday":
            message = '🍿 Today is Netflix and chill!';
            break;
        default:
            message = '⚠️ It’s not a valid day name! Try Again';
    }
    document.getElementById('output').innerText = message;
}