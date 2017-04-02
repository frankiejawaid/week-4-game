
details = {
	score: 0,
	wins: 0,
	losses: 0,

	random_number: function(){
			return (Math.floor(Math.random()*102)) + 19;
	},

	random_number_gem:function(){
			return (Math.floor(Math.random()*12)) +1;
	}
}


 var random_guess = game.random_number();
 var guess1 = game.random_number_gem();
 var guess2 = game.random_number_gem();
 var guess3 = game.random_number_gem();
 var guess4 = game.random_number_gem();
 	$(document).ready(function(){
 		//// $(#wins).html(game.wins);
 		//// $(#losses).html(game.losses);
 	
 	tracking_score = {

 		//winning
 				function(){
 					if (game.score === random_guess){
 						alert("YOU WIN!!!");
 						game.wins = game.wins +1;
 						console.log(wins);
 						game.score = 0;
 						random_guess = game.random_number();
 						guess1 = game.random_number_gem();
 						guess2 = game.random_number_gem();
 						guess3 = game.random_number_gem();
 						guess4 = game.random_number_gem();
 						$("#score").html(0);
 						$("#wins").html("wins:" + game.wins);
 						$("#random_number").html(random_guess);
 					}
 				},
 		
 		//losing
 				function(){
 					if (game.score > random_guess){
 						alert("YOU LOSE!!!");
 						game.losses = game.losses +1;
 						console.log(losses);
 						game.score = 0;
 						randomguess= game.randomguess();
 						guess1 = game.randomnumber_gem();
 						guess2 = game.randomnumber_gem();
 						guess3 = game.randomnumber_gem();
 						guess4 = game.randomnumber_gem();
 						$("#score").html(0);
 						$("#losses").html("losses:" + game.losses);
 						$("#randomnumber").html(randomguess);

 					}
 				}

 			}

 			//Generating red random
 				$("#randomnumber").html(randomguess);
 				$("red").on("click",function(){
 					game.score +- guess1;
 					$("#score").html(game.score);
 					tracking_score.winning();
 					tracking_score.losing();
 				});

 				
 			
 			//generating blue random
 				$("#randomnumber").html(randomguess);
 				$("blue").on("click",function(){
 					game.score +- guess2;
 					$("#score").html(game.score);
 					tracking_score.winning();
 					tracking_score.losing();
 				});

 			//Generating yellow random
 				$("#randomnumber").html(randomguess);
 				$("yellow").on("click",function(){
 					game.score +- guess3;
 					$("#score").html(game.score);
 					tracking_score.winning();
 					tracking_score.losing();
 				});	

 			//Generating green random
 				$("#randomnumber").html(randomguess);
 				$("green").on("click",function(){
 					game.score +- guess4;
 					$("#score").html(game.score);
 					tracking_score.winning();
 					tracking_score.losing();
 				});

 			});