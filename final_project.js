var namespace = "http://www.w3.org/2000/svg"

// Write your code here!

var width = 10
makeImage("https://m.popkey.co/dee3e0/Ep7Dm.gif",0,0,50,100,1)
makeImage("https://m.popkey.co/dee3e0/Ep7Dm.gif",0,-10,50,100,1)
makeImage("https://m.popkey.co/dee3e0/Ep7Dm.gif",0,-20,50,100,1)
makeImage("https://m.popkey.co/dee3e0/Ep7Dm.gif",0,-30,50,100,1)
makeImage("https://m.popkey.co/dee3e0/Ep7Dm.gif",0,-40,50,100,1)



var world = makeCircle(0,25,30,"#3380B5",1)
var r1 = makeRect(1,1,10,5,"limegreen",1)
var mc1 = makeCircle(1,3.5,2.5,"limegreen",1)
var mc2 = makeCircle(11,3.5,2.5,"limegreen",1)
var r2 = makeRect(3,19,10,5,"limegreen",1)
var mc3 = makeCircle(3.5,21.5,2.5,"limegreen",1)
var mc4 = makeCircle(13,22.5,3.5,"limegreen",1)
var r3 = makeRect(9,23,10,3,"limegreen",1)
var mc5 = makeCircle(9,23.5,2.5,"limegreen",1)
var mc6 = makeCircle(18.7,24.5,1.5,"limegreen",1)
var r4 = makeRect(6,0.6,9,3,"white",1)
var mc7 =makeCircle(14.7,2.1,1.5,"white",1)
var mc8 = makeCircle(6,2.1,1.5,"white",1)
var r5 = makeRect(8,34,10,3,"limegreen",1)
var mc9 = makeCircle(8,35.5,1.5,"limegreen")
var mc10 = makeCircle(18,35.5,1.5,"limegreen")
var r6 = makeRect(3,35.5,10,4,"White",1)
var mc11 = makeCircle(3,37.5,2,"white",1)
var mc12 = makeCircle(13,37.5,2,"white",1)
var r7 = makeRect(6.8,9,10,5.1,"white")
var mc13 = makeCircle(16.67,11.56,2.55,"white",1)
var mc14 = makeCircle(6.7,11.56,2.55,"white",1)
var r8 = makeRect(-13,8,12,5,"limegreen",1)
var mc15 = makeCircle(-1,10.5,2.5,"limegreen",1)
var mc16 = makeCircle(-13.5,10.5,2.5,"limegreen",1)
var r9 = makeRect(-13,24,9,4,"limegreen",1)
var mc17 = makeCircle(-13,26,2,"limegreen",1)
var mc18 = makeCircle(-4,26,2,"limegreen",1)
var r10 = makeRect(-15,27,9,4,"white",1)
var mc19 = makeCircle(-15,29,2,"white",1)
var mc20 = makeCircle(-6,29,2,"white",1)
var r11 = makeRect(-15,12,9,4,"white",1)
var mc21 = makeCircle(-6,14,2,"white",1)
var mc22 = makeCircle(-15,14,2,"white",1)
var r12 = makeRect(-15,38,15,4,"limegreen",1)
var mc23 = makeCircle(0,40,2,"limegreen",1)
var mc24 = makeCircle(-15,40,2,"limegreen",1)
var r13 = makeRect(-14,18,8,3,"limegreen")
var mc25 = makeCircle(-14,19.5,1.5,"limegreen")
var mc26 = makeCircle(-6,19.5,1.5,"limegreen")
var r14 = makeRect(-6,17,10,3,"white")
var mc27 =makeCircle(-6,18.5,1.5,"White")
var mc28 =makeCircle(4,18.5,1.5,"white")
function animate() {
  move(r1,0.09,0)
  move(mc1,0.09,0)
  move(mc2,0.09,0)
  move(r2,0.09,0)
  move(mc3,0.09,0)
  move(mc4,0.09,0)
  move(r3,0.09,0)
  move(mc5,0.09,0)
  move(mc6,0.09,0)
  move(r4,0.08,0)
  move(mc7,0.08,0)
  move(mc8,0.08,0)
  move(r5,0.09,0)
  move(mc9,0.09,0)
  move(mc10,0.09,0)
  move(r6,0.12,0)
  move(mc11,0.12,0)
  move(mc12,0.12,0)
  move(r7,0.12,0)
  move(mc13,0.12,0)
  move(mc14,0.12,0)
  move(world,0.1,0)
  move(r8,0.1,0)
  move(mc15,0.1,0)
  move(mc16,0.1,0)
  move(r9,0.1,0)
  move(mc17,0.1,0)
  move(mc18,0.1,0)
  move(r10,0.12,0)
  move(mc19,0.12,0)
  move(mc20,0.12,0)
  move(r11,0.087,0)
  move(mc21,0.087,0)
  move(mc22,0.087,0)
  move(r12,0.1,0)
  move(mc23,0.1,0)
  move(mc24,0.1,0)
  move(r13,0.1,0)
  move(mc25,0.1,0)
  move(mc26,0.1,0)
  move(r14,0.1,0)
  move(mc27,0.1,0)
  move(mc28,0.1,0)

  requestAnimationFrame(animate)
  }
  animate()




function reset() {
  setX(world,0)
  setX(r1,1)
  setX(mc1,1)
  setX(mc2,11)
  setX(r2,3)
  setX(mc3,3)
  setX(mc4,13)
  setX(r3,9)
  setX(mc5,9)
  setX(mc6,18)
  setX(r4,6)
  setX(mc7,14.7)
  setX(mc8,6)
  setX(r5,8)
  setX(mc9,8)
  setX(mc10,18)
  setX(r6,3)
  setX(mc11,3)
  setX(mc12,13)
  setX(r7,6.8)
  setX(mc13,16.67)
  setX(mc14,6.7)
  setX(r8,-13)
  setX(mc15,-1)
  setX(mc16,-13)
  setX(r9,-13)
  setX(mc17,-13)
  setX(mc18,-4)
  setX(r10,-15)
  setX(mc19,-15)
  setX(mc20,-6)
  setX(r11,-15)
  setX(mc21,-6)
  setX(mc22,-15)
  setX(r12,-15)
  setX(mc23,0)
  setX(mc24,-15)
  setX(r13,-14)
  setX(mc25,-14)
  setX(mc26,-6)
  setX(r14,-6)
  setX(mc27,-6)
  setX(mc28,4)
}



// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
