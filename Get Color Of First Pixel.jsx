var docRef = app.activeDocument
var pixelLoc = [UnitValue("0 pixels") , UnitValue("0 pixels")];
var colorSamplerRef = docRef.colorSamplers.add(pixelLoc);
app.foregroundColor = colorSamplerRef.color