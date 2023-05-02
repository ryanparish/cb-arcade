
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
	runtime.addEventListener("instancedestroy", e => GetDestroyedInstance(e, runtime));
	runtime.addEventListener("instancecreate", e => GetInstance(e, runtime));
	
}

function Tick(runtime)
{
	
}


function GetDestroyedInstance(e, runtime)
{	
	if(e.instance.objectType.name == "StartText"){
		CreateRTS(runtime);
	}
	
	if(e.instance.objectType.name == "EmptyBoxRTS" || e.instance.objectType.name == "EmptyBoxFamily" || e.instance.objectType.name == "EmptyBoxFeast") {
		addBox(runtime);
	}
	
	if(e.instance.objectType.name == "EmptyBoxRTS"){
		CreateFamily(runtime);
	}
	
	if(e.instance.objectType.name == "EmptyBoxFamily"){
		CreateFeast(runtime);
	}
	
	if(e.instance.objectType.name == "EmptyBoxFeast"){
		CreateRTS(runtime);
	}	
}


function addBox(runtime) {
	runtime.globalVars.NumBoxesCompleted += 1;
}


function GetInstance(e, runtime)
 { 
 	if(e.instance.objectType.name == "FinishedText"){
		const score = runtime.globalVars.Score;
		const numBoxes = runtime.globalVars.NumBoxesCompleted;
		console.log("score is " + score);
		console.log("numbBoxes is " + numBoxes);
		const player = parent.GetPlayer();
		player.SetVar("TGT1Completion", true);
		player.SetVar("TGT1Score", score);
		player.SetVar("TGT1Boxes", numBoxes);
	}
 }

//
function CreateRTS(runtime)
{
	runtime.objects.EmptyBoxRTS.createInstance(1, 1630, 542);
	const rtsBox = runtime.objects.EmptyBoxRTS.getFirstInstance();
	rtsBox.instVars.isLayer1 = true;
	runtime.objects.RTSTicket.createInstance(1, 1530, 900);
	const boxText = runtime.objects.BoxText.getFirstInstance();
	boxText.text = "Hot and Ready Layer 1";
	runtime.objects.TurkeyGravy16ozRTS.createInstance(1, 374, 498);
	const tgRTS = runtime.objects.TurkeyGravy16ozRTS.getFirstInstance();
	tgRTS.instVars.StartX = tgRTS.x;
	tgRTS.instVars.StartY = tgRTS.y;
	tgRTS.instVars.isLayer1 = true;
	tgRTS.instVars.islayer2 = false;
	runtime.objects.CranberryRelishRTS.createInstance(1, 566, 498);
	const cbRTS = runtime.objects.CranberryRelishRTS.getFirstInstance();
	cbRTS.instVars.StartX = cbRTS.x;
	cbRTS.instVars.StartY = cbRTS.y;
	cbRTS.instVars.isLayer1 = true;
	cbRTS.instVars.islayer2 = false;
	runtime.objects.TurkeyNDressingPan.createInstance(1, 171, 942);
	const tdp = runtime.objects.TurkeyNDressingPan.getFirstInstance();
	tdp.instVars.StartX = tdp.x;
	tdp.instVars.StartY = tdp.y;
	tdp.instVars.isLayer1 = true;
	tdp.instVars.islayer2 = false;
	runtime.objects.GreenBeansRTS.createInstance(1, 503, 670);
	const gb = runtime.objects.GreenBeansRTS.getFirstInstance();
	gb.instVars.StartX = gb.x;
	gb.instVars.StartY = gb.y;
	gb.instVars.isLayer1 = true;
	gb.instVars.islayer2 = false;
	runtime.objects.SweetPotatoCasseroleRTS.createInstance(1, 514, 974);
	const sweet = runtime.objects.SweetPotatoCasseroleRTS.getFirstInstance();
	sweet.instVars.StartX = sweet.x;
	sweet.instVars.StartY = sweet.y;
	sweet.instVars.isLayer1 = true;
	sweet.instVars.islayer2 = false;
	runtime.objects.MacNCheeseRTS.createInstance(1, 508, 825);
	const mac = runtime.objects.MacNCheeseRTS.getFirstInstance();
	mac.instVars.StartX = mac.x;
	mac.instVars.StartY = mac.y;
	mac.instVars.isLayer1 = false;
	mac.instVars.islayer2 = true;
	runtime.objects.ButterCupsRTS.createInstance(1, 486, 348);
	const butter = runtime.objects.ButterCupsRTS.getFirstInstance();
	butter.instVars.StartX = butter.x;
	butter.instVars.StartY = butter.y;
	butter.instVars.isLayer1 = false;
	butter.instVars.islayer2 = true;
	runtime.objects.DinnerRolls.createInstance(1, 177, 695);
	const rolls = runtime.objects.DinnerRolls.getFirstInstance();
	rolls.instVars.StartX = rolls.x;
	rolls.instVars.StartY = rolls.y;
	rolls.instVars.isLayer1 = false;
	rolls.instVars.islayer2 = true;
	runtime.objects.PumpkinPieRTS.createInstance(1, 135, 478);
	const pumpkin = runtime.objects.PumpkinPieRTS.getFirstInstance();
	pumpkin.instVars.StartX = pumpkin.x;
	pumpkin.instVars.StartY = pumpkin.y;
	pumpkin.instVars.isLayer1 = false;
	pumpkin.instVars.islayer2 = true;
}

//
function CreateFamily(runtime)
{
	runtime.objects.EmptyBoxFamily.createInstance(1, 1630, 542);
	const familyBox = runtime.objects.EmptyBoxFamily.getFirstInstance();
	familyBox.instVars.isLayer1 = true;
	runtime.objects.HNSFamilyGBTicket.createInstance(1, 1530, 900);
	const boxText = runtime.objects.BoxText.getFirstInstance();
	boxText.text = "HNS Family 4-6 Layer 1";
	runtime.objects.TurkeyGravyFamily.createInstance(1, 543, 385);
	const tgFamily = runtime.objects.TurkeyGravyFamily.getFirstInstance();
	tgFamily.instVars.StartX = tgFamily.x;
	tgFamily.instVars.StartY = tgFamily.y;
	tgFamily.instVars.isLayer1 = true;
	tgFamily.instVars.islayer2 = false;
	runtime.objects.ChickenBrothFamily.createInstance(1, 125, 416);
	const cbf = runtime.objects.ChickenBrothFamily.getFirstInstance();
	cbf.instVars.StartX = cbf.x;
	cbf.instVars.StartY = cbf.y;
	cbf.instVars.isLayer1 = true;
	cbf.instVars.islayer2 = false;
	runtime.objects.CranberryRelishFamily.createInstance(1, 311, 416);
	const cbFamily = runtime.objects.CranberryRelishFamily.getFirstInstance();
	cbFamily.instVars.StartX = cbFamily.x;
	cbFamily.instVars.StartY = cbFamily.y;
	cbFamily.instVars.isLayer1 = true;
	cbFamily.instVars.islayer2 = false;
	runtime.objects.MacNCheeseFamily.createInstance(1, 197, 579);
	const mac = runtime.objects.MacNCheeseFamily.getFirstInstance();
	mac.instVars.StartX = mac.x;
	mac.instVars.StartY = mac.y;
	runtime.objects.CornbreadDressingFamily.createInstance(1, 201, 741);
	const cdf = runtime.objects.CornbreadDressingFamily.getFirstInstance();
	cdf.instVars.StartX = cdf.x;
	cdf.instVars.StartY = cdf.y;
	cdf.instVars.isLayer1 = true;
	cdf.instVars.islayer2 = false;
	runtime.objects.SweetPotatoCasseroleFamily.createInstance(1, 552, 744);
	const sweet = runtime.objects.SweetPotatoCasseroleFamily.getFirstInstance();
	sweet.instVars.StartX = sweet.x;
	sweet.instVars.StartY = sweet.y;
	sweet.instVars.isLayer1 = true;
	sweet.instVars.islayer2 = false;
	runtime.objects.GreenBeansFamily.createInstance(1, 548, 578);
	const gb = runtime.objects.GreenBeansFamily.getFirstInstance();
	gb.instVars.StartX = gb.x;
	gb.instVars.StartY = gb.y;
	gb.instVars.isLayer1 = true;
	gb.instVars.islayer2 = false;
	runtime.objects.ButterCupsFamily.createInstance(1, 392, 277);
	const butter = runtime.objects.ButterCupsFamily.getFirstInstance();
	butter.instVars.StartX = butter.x;
	butter.instVars.StartY = butter.y;
	butter.instVars.isLayer1 = true;
	butter.instVars.islayer2 = false;
	runtime.objects.TurkeyBreastFamily.createInstance(1, 204, 938);
	const tbf = runtime.objects.TurkeyBreastFamily.getFirstInstance();
	tbf.instVars.StartX = tbf.x;
	tbf.instVars.StartY = tbf.y;
	tbf.instVars.isLayer1 = false;
	tbf.instVars.islayer2 = true;
	runtime.objects.YeastRollsFamily.createInstance(1, 543, 945);
	const yrf = runtime.objects.YeastRollsFamily.getFirstInstance();
	yrf.instVars.StartX = yrf.x;
	yrf.instVars.StartY = yrf.y;
	yrf.instVars.isLayer1 = false;
	yrf.instVars.islayer2 = true;
}

//
function CreateFeast(runtime)
{
	runtime.objects.EmptyBoxFeast.createInstance(1, 1630, 542);
	const feastBox = runtime.objects.EmptyBoxFeast.getFirstInstance();
	feastBox.instVars.isLayer1 = true;
	runtime.objects.HNSFeastTicket.createInstance(1, 1530, 900);
	const boxText = runtime.objects.BoxText.getFirstInstance();
	boxText.text = "HNS Feast 8-10 Layer 1";
	runtime.objects.TurkeyGravyFeast.createInstance(1, 783, 659);
	const tgFeast = runtime.objects.TurkeyGravyFeast.getFirstInstance();
	tgFeast.instVars.StartX = tgFeast.x;
	tgFeast.instVars.StartY = tgFeast.y;
	tgFeast.instVars.isLayer1 = true;
	tgFeast.instVars.islayer2 = false;
	tgFeast.instVars.islayer2 = false;
	runtime.objects.ChickenBrothFeast.createInstance(1, 160, 390);
	const cbf = runtime.objects.ChickenBrothFeast.getFirstInstance();
	cbf.instVars.StartX = cbf.x;
	cbf.instVars.StartY = cbf.y;
	cbf.instVars.isLayer1 = true;
	cbf.instVars.islayer2 = false;
	cbf.instVars.islayer3 = false;
	runtime.objects.CranberryRelishFeast.createInstance(1, 397, 403);
	const cbFeast = runtime.objects.CranberryRelishFeast.getFirstInstance();
	cbFeast.instVars.StartX = cbFeast.x;
	cbFeast.instVars.StartY = cbFeast.y;
	cbFeast.instVars.isLayer1 = true;
	cbFeast.instVars.islayer2 = false;
	cbFeast.instVars.islayer3 = false;
	runtime.objects.CornbreadDressingFeast.createInstance(1, 497, 570);
	const cdf = runtime.objects.CornbreadDressingFeast.getFirstInstance();
	cdf.instVars.StartX = cdf.x;
	cdf.instVars.StartY = cdf.y;
	cdf.instVars.isLayer1 = true;
	cdf.instVars.islayer2 = false;
	cdf.instVars.islayer3 = false;
	runtime.objects.SweetPotatoCasseroleFeast.createInstance(1, 182, 726);
	const sweet = runtime.objects.SweetPotatoCasseroleFeast.getFirstInstance();
	sweet.instVars.StartX = sweet.x;
	sweet.instVars.StartY = sweet.y;
	sweet.instVars.isLayer1 = true;
	sweet.instVars.islayer2 = false;
	sweet.instVars.islayer3 = false;
	runtime.objects.GreenBeansFeast.createInstance(1, 524, 721);
	const gb = runtime.objects.GreenBeansFeast.getFirstInstance();
	gb.instVars.StartX = gb.x;
	gb.instVars.StartY = gb.y;
	gb.instVars.isLayer1 = false;
	gb.instVars.islayer2 = true;
	gb.instVars.islayer3 = false;
	runtime.objects.MacNCheeseFeast.createInstance(1, 167, 563);
	const mac = runtime.objects.MacNCheeseFeast.getFirstInstance();
	mac.instVars.StartX = mac.x;
	mac.instVars.StartY = mac.y;
	mac.instVars.isLayer1 = false;
	mac.instVars.islayer2 = true;
	mac.instVars.islayer3 = false;
	runtime.objects.ButterCupsFeast.createInstance(1, 601, 417);
	const butter = runtime.objects.ButterCupsFeast.getFirstInstance();
	butter.instVars.StartX = butter.x;
	butter.instVars.StartY = butter.y;
	butter.instVars.isLayer1 = false;
	butter.instVars.islayer2 = false;
	butter.instVars.islayer3 = true;
	runtime.objects.TurkeyBreastFeast.createInstance(1, 177, 911);
	const tbf = runtime.objects.TurkeyBreastFeast.getFirstInstance();
	tbf.instVars.StartX = tbf.x;
	tbf.instVars.StartY = tbf.y;
	tbf.instVars.isLayer1 = false;
	tbf.instVars.islayer2 = false;
	tbf.instVars.islayer2 = true;
	runtime.objects.YeastRollsFeast.createInstance(1, 497, 919);
	const yrf = runtime.objects.YeastRollsFeast.getFirstInstance();
	yrf.instVars.StartX = yrf.x;
	yrf.instVars.StartY = yrf.y;
	yrf.instVars.isLayer1 = false;
	yrf.instVars.islayer2 = false;
	yrf.instVars.islayer3 = true;
	runtime.objects.HolidayPiesFeast.createInstance(1, 812, 914);
	const hpf = runtime.objects.HolidayPiesFeast.getFirstInstance();
	hpf.instVars.StartX = hpf.x;
	hpf.instVars.StartY = hpf.y;
	hpf.instVars.isLayer1 = false;
	hpf.instVars.islayer2 = false;
	hpf.instVars.islayer3 = true;
}






















































