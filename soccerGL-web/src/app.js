
let canv1inst;
const renderTemplate = () => {
       
    const canv1 = (soccer) => {
                    
        let score1 = 0;
        let score2 = 0;

        let play2x = 0;
        let play2y = 50;
        let play2z = -500;
        let width;
        let height;
        soccer.setup = () => {
            //  soccer.angleMode(DEGREES);
            
            width = window.innerWidth;
            height = window.innerHeight;
            soccer.createCanvas(width,height,soccer.WEBGL);
        }

        let glow = 0;
        let glowRate = 1;
        let camZ = 0;
        let bgsun = function () {
            //sun
            glow += glowRate;
            if(glow>200){
                glowRate = -glowRate;
            }
            if(glow<-200){
                glowRate = -glowRate;
            }
            soccer.ambientLight(250);
            soccer.push();
            soccer.translate(700,-750,-2800);
            soccer.pointLight(255,255,0,700,-750,-2800);
            soccer.pointLight(255,255,0,700,-350,2800);
            soccer.directionalLight(255,255, 0,0,0,-2000);
            // camera(mouseX,mouseY,camZ);
            soccer.rotateX(soccer.frameCount * 0.02);
            soccer.rotateY(soccer.frameCount * 0.01);
            soccer.rotateZ(soccer.frameCount * 0.01);
            soccer.specularMaterial(250,250,0,60-glow/2);
            soccer.sphere(500+glow/2);
            soccer.specularMaterial(250,250,0,50+glow/3);
            soccer.sphere(400-glow/3);
            soccer.specularMaterial(250,250,0,20+glow/2);
            soccer.sphere(300-glow/2);
            soccer.specularMaterial(250,250,0,10);
            soccer.sphere(100);
            soccer.resetMatrix();
            soccer.pop();
        };

        //ball object constructor

let soccerBall = {
    pos: soccer.createVector(0,0,500),
    vel:  soccer.createVector(0,0,0),
    acc: soccer.createVector(0,0,0),
    mass:  soccer.createVector(0,0.1,0),
    
    updte(){
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.add(this.mass);
        
    },
    draw(){
        soccer.pop();
        soccer.translate(this.pos.x,this.pos.y,this.pos.z);
        soccer.specularMaterial(255,0,255);
        soccer.sphere(25);
        soccer.resetMatrix();
        soccer.push();
        
    },
      
};
        
let instSoccer = () => {
    soccerBall.updte();
    soccerBall.draw();
}

        soccer.draw = () => {
                // soccer.background(100);
                soccer.translate(-1000,-1000,-3000);
                soccer.camera(soccer.mouseX,soccer.mouseY);
                soccer.fill(0,0,255);
                soccer.rect(0,0,3000, 1000);
                soccer.resetMatrix();

                bgsun();
                instSoccer();
            
        }

    };

        /*






var soccerB = function() {
   
};

let ballX = 0;
let ballY = 0;
let ballZ = 0;

let resistanceX = -1;
let resistanceY = -1;
let resistanceZ = -1;
let roto = 0;
function GlowingParticle(x,y,z,m,s){
    let glow = 2;
    let glowRate = 0.55;
    this.pos = createVector(x,y,z);
    this.acc = createVector(0,0,0);
    this.vel = createVector(0,0,0);
    this.mass = createVector(m,m,m);
    
    this.applyForce = function(force) {
        let forceCopy = force;
            this.acc.add(forceCopy); 
            this.mass.div(forceCopy);
    };
    
    this.update = function () {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0,0,0);
    };
    
    this.display = function(){
        
        
        specularMaterial(250,0,250,0,0,200);
        translate(this.pos.x,this.pos.y,this.pos.z);
        specularMaterial(255);
        sphere(30);
        resetMatrix();
        
        
        
        
    //     translate(this.pos.x,this.pos.y,this.pos.z);
    //     scale(s); //added exaggeration for eye animation
        
    //     //background frame incase of no looping background
    //     // ambientLight(0);
    //     //sphere(350);,mouseX,mouseY,this.pos.z       
    //     // camera(mouseX,mouseY,camZ);
    //     pointLight(255,255,255,100,mouseX,mouseY,camZ-100);
        
    //     if(key == 'w' && keyIsPressed){
    //         camZ = camZ - 5;
    //     }
    //      if(key == 's' && keyIsPressed){
    //         camZ = camZ + 5;
    //     }
    //     specularMaterial(255,250,250,30);
        ambientLight(55,25,55,155-glow);
    //     sphere(120);
    //     //ambientLight(55,55,55,102-glow);
    //     specularMaterial(255,250,250,25);
    //     sphere(160+glow/2.8);
    //     //ambientLight(55,55,55,80+glow);
    //     specularMaterial(255,250,250,20);
    //     sphere(200-glow/2.8);
    //     //ambientLight(55,55,55,65+glow);
    //     specularMaterial(255,250,250,15);
    //     sphere(250+glow/2.4);
    //     //ambientLight(55,55,55,35+glow);
    //     specularMaterial(255,250,250,10);
    //     sphere(320-glow);
    //     //animation
    //     glow = glow + glowRate;
    //     if(glow>30){
    //         glowRate = -glowRate;
    //     }
    //     if(glow<0){
    //         glowRate = -glowRate;
    //     }
    //     resetMatrix();
    };
    this.boundaries=function(){
       if(this.pos.x > 150){
            this.vel.x *= resistanceX;
            this.pos.x = 150;
            resistanceX += 0.2;
            if(resistanceX > 0.4){
                this.vel.x -= 0.01;
                if(this.vel.x < 0){
                    this.vel.x = 0;
                    roto = roto;
                }
            }
            if(resistanceX > 1){
                
                resistanceX = 0;
            }
        }  
        if(this.pos.x < -150){
            this.vel.x *= resistanceX;
            this.pos.x = -150;
            resistanceX += 0.2;
            if(resistanceX > 0.4){
                this.vel.x += 0.01;
                if(this.vel.x < 0){
                    this.vel.x = 0;
                    roto = roto;
                }
            }
            if(resistanceX > 1){
                
                resistanceX = 0;
            }
        }  
        if(this.pos.y < -500){
            this.vel.y *= resistanceY;
            this.pos.y = -500;
            resistanceY += 0.2;
            if(resistanceY > 0.4){
                this.vel.y += 0.01;
                if(this.vel.y > 0){
                    this.vel.y = 0;
                    roto = roto;
                }
            }
            if(resistanceY > 1){
                
                resistanceY = 0;
            }
        }  
        // if(this.pos.y > 50){
        //     this.pos.y = 50;
        //     this.vel.y = -this.vel.y;
        // }  
         if(this.pos.y > 50) {
            this.vel.y *= resistanceY;
            this.pos.y = 50;
            resistanceY += 0.2;
            if(resistanceY > 0.4){
                this.vel.y -= 0.01;
                if(this.vel.y < 0){
                    this.vel.y = 0;
                    roto = roto;
                }
            }
            if(resistanceY > 1){
                
                resistanceY = 0;
            }
        }  
        if(this.pos.z < -2000){
           this.vel.z *= resistanceZ;
            this.pos.z = -2000;
            resistanceZ += 0.2;
            if(resistanceZ > 0.4){
                this.vel.z += 0.01;
                if(this.vel.z < 0){
                    this.vel.z = 0;
                    roto = roto;
                }
            }
            if(resistanceZ > 1){
                resistanceZ = 0;
            }
        }  
        if(this.pos.z > 500){
            this.vel.z *= resistanceZ;
            this.pos.z = 500;
            resistanceZ += 0.2;
            if(resistanceZ > 0.4){
                this.vel.z -= 0.01;
                if(this.vel.z < 0){
                    this.vel.z = 0;
                    roto = roto;
                }
            }
            if(resistanceZ > 1){
                resistanceZ = 0;
            }
        }  
    };
}

let glowingP = [
    
    new GlowingParticle(ballX,ballY,ballZ,20,0.6)
    
];
let grav = 0;
const gravity = function() {
    grav = createVector(0,1,0);
};

let p1Kick = 0;
const player1kick = function() {
    p1Kick = createVector(0,0,0.3);
};


let p2Kick = 0;
const player2kick = function() {
    p2Kick = createVector(random(-2,2),random(-1,1),3);
};
let p1col = 0;
const player1collide = function() {
    p1col = createVector(random(-2,2),random(-2,-4),-10);
};


let p1x;
let p1y;
let p1Position = function () {
    p1x = (mouseX-width/2)*0.25;
    p1y = ((mouseY-height/2)*0.25)+600;
}
function draw() {
    
    background(100,105,255);
    //sun and field
    push();
    rotateX(80.204);
    fill(100,255,200);
    translate(0,-3500,-300);
    plane(width*5,height*20);
    resetMatrix();
    pop();
    
    bgsun();
    
   
    
    //soccerball
    for(var x = 0; x < glowingP.length; x++ ){
        
        
        
        
        glowingP[x].update();
        glowingP[x].boundaries();
        glowingP[x].display();
        glowingP[x].applyForce(grav);
        if(mouseIsPressed){
            glowingP[x].applyForce(p1Kick);
        }
        
        player1collide();
        player1kick();
        player2kick();
        
        gravity();
        
        //ball collision
        if(dist(glowingP[x].pos.x,glowingP[x].pos.y,glowingP[x].pos.z,p1x,50,p1y)<250){
            background(0);
            glowingP[x].applyForce(p1col);
        }
         //player 2
    push();
    translate(play2x,play2y,play2z);
    pointLight(255,700,-350,500);
    specularMaterial(255,0,0);
    box(50,50,25);
    resetMatrix();
    pop();
    
    //player2 goal
    push();
    translate(0,0,-500);
    fill(255,20);
    box(150,100,25);
    resetMatrix();
    pop();
         //player 1
    push();
    p1Position(); //assigns p1x,p1y to mouse variables
    translate(p1x,50,p1y);
    specularMaterial(100,255,0);
    box(50,50,25);
    resetMatrix();
    pop();
    }





        */





            
    

    const Template = (
        <div>
            <h1>
                ssss
            </h1>
            <span>
                {canv1inst = new p5(canv1, 'app')}
            </span>
        </div>
    );

    
    
};

const appRoot = document.getElementById('app');

renderTemplate();