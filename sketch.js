
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box (200,200,40,40,2,1)
  box2 = new Box (50,60,30,70,3,4)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()
  box1.bounce()

  fill ("yellow")
  box2.show()
  box2.move()
  box2.bounce()

}

