#target photoshop;  
app.bringToFront();  
if(documents.length){  
	var doc = activeDocument;  
	doc.activeLayer = doc.layers[doc.layers.length -1];  
	if(doc.activeLayer.isBackgroundLayer){  
		doc.activeLayer.name = "Background"; 
	}  
	else{
		doc.activeLayer.name = "Background"; 
	}
}; 