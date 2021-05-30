misty.Debug("starting skill play_combination");

// Issue command to fetch list of images and audio clips
misty.GetImageList();
misty.GetAudioList();

// Callback to handle data returned 
function play_combination(data) {
    // Check if data was received
    if (data) {
        misty.DisplayImage("e_DefaultContent.jpg");
        misty.Pause(1000);
        misty.DisplayImage("e_EcstacyHilarious.jpg");
        misty.PlayAudio("iamsoproudofyou.wav");
        misty.Pause(2500);
        misty.DisplayImage("e_DefaultContent.jpg");
    }
}
