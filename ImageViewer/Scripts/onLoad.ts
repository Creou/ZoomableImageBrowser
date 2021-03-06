﻿/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/knockout/knockout.d.ts" />
/// <reference path="typings/uuid/UUID.d.ts" />
/// <reference path="tags.ts" />
/// <reference path="canvas.ts" />

$(() => {
	//document.body.style.overflow = false ? "" : "hidden";
	var tagViewModel = new TagModule.ImageTagViewModel();
	ko.applyBindings(tagViewModel, $("#filters")[0]);
	var canvas = $("#canvas")[0];
	var canvasController = new CanvasModule.CanvasController(<HTMLCanvasElement>canvas, tagViewModel);
	ko.applyBindings(canvasController, $("#control")[0]);
}); 