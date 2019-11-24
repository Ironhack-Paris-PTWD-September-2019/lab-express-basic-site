$(document).ready(function(){
  
      var score = 0;

        // hide quiz msg
        $('.quiz-msg', this).remove();
        
        // find correct option
        var correct = $(this).find(':checked[data-correct]').length;
        
        // check if correct or not
        if( correct == 1){
          // correct!
          // add 1 point to the score
          score++;
          var msgHTML = '<div class="quiz-msg correct">Correct!</div>';
          $(this).append(msgHTML);
        }else{
          // incorrect!
          //alert("incorrect!");
          var msgHTML = '<div class="quiz-msg incorrect">Incorrect!</div>';
          $(this).append(msgHTML);
        }
        
      });
      
      // Output score
      $('#score').text(score);
      
      
    
    
  

