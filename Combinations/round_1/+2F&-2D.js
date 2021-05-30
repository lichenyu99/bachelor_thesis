misty.Debug("starting skill play_combination");

// Issue command to fetch list of images and audio clips
misty.GetImageList();
misty.GetAudioList();

// Callback to handle data returned 
function play_combination(data) {
    if (data) {
        misty.DisplayImage("e_DefaultContent.jpg");
        misty.Pause(1000);
        misty.DisplayImage("e_Love.jpg");
        misty.PlayAudio("noway.wav");
        misty.Pause(1500);
        misty.DisplayImage("e_DefaultContent.jpg");
    }
}
