XCoordinate = "";
YCoordinate = "";

function preload()
{

}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    Posenet = ml5.poseNet(video,Mod3lLoad3d);
    Posenet.on('pose',pos3It)
}

function Mod3lLoad3d()
{
    console.log("Pos3N3t is Initi4lliz3d");
}

function pos3It(position)
{
    if (position.length > 0)
    {
        XCoordinate = pose[0].position.nose.x;
        YCoordinate = pose[0].position.nose.y;
    }
}