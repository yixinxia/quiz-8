var slider; // Create a variable slider
var slider2; // Create a variable slider2

function setup() {
	createCanvas(1000, 700); // Set canva size
	var angle = PI / 4; // Set initial angle 45 degree
	var shrink; // Set a variable shrink factor
	slider = createSlider(0, TWO_PI, PI / 4, 0.01); // Create a slide for angle control
	slider2 = createSlider(0, 0.8, 0.7, 0.0001); // Create a slider for shrink factor
}

function draw() {
    background(0); // Set background
	angle = slider.value(); // Get the current angle value from the slider
	shrink = slider2.value(); // Get the current shrink value from the second slider
    print(shrink); // Print the shrink value to the console
	stroke(255); // Set stroke
	translate(width/2, height/1.2); // Move the origin to the center of the canvas
	branch(100); // Start the recursive branch drawing with an initial length of 100
}

function branch(len) {
	line(0, 0, 0, -len); // Draw current branch
	translate(0, -len); // Move to the end of the current branch
	if (len > 4) { // If the branch length > 4
		push();	
		rotate(angle); // Rotate angle speciality
		branch(len * shrink); // Recursively draw the right branch with reduced length
		pop();	// Restore the previous coordinate system	
		push(); // Save the current coordinate system again
		rotate(-angle); // Rotate in opposite
		branch(len * shrink); // 递归绘制左侧分支
		pop(); 	// Restore
	}
}