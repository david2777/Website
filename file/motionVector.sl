surface motionVector(){
    // Get blur vector on image plane in pixels
    point rasterP = transform( "raster", P );
    point rasterPdPdtime = transform( "raster", P + dPdtime );
    vector pixelsMoved = rasterPdPdtime - rasterP;

    // Invert the red channel
    Ci = color( float (( 1-(comp(pixelsMoved,0)))), comp(pixelsMoved, 1), comp(pixelsMoved, 2));
    Oi = 1;
}