# Video Setup Instructions

## Step 1: Prepare Video File
1. Download the video from https://youtu.be/gQldOO6KiU8
2. Convert to web-optimized formats:
   - MP4 (H.264 codec) - primary format
   - WebM (VP9 codec) - backup format for better compression

## Step 2: Optimize for Web
- Resolution: 1920x1080 or 1280x720 (depending on quality needs)
- File size: Keep under 10-15MB for good loading performance
- Duration: If long, consider trimming to 30-60 seconds and loop
- Remove audio track (since it will be muted anyway)

## Step 3: File Placement
Place the optimized video files in the public directory:
```
public/
├── hero-video.mp4      # Primary format
├── hero-video.webm     # Backup format (optional but recommended)
└── hero-poster.jpg     # Thumbnail image for loading state
```

## Step 4: Video Specifications
- **Format**: MP4 (H.264)
- **Aspect Ratio**: 16:9 
- **Frame Rate**: 24-30fps
- **Bitrate**: 1-3 Mbps for good quality/size balance
- **Audio**: Remove (not needed for background video)

## Tools for Conversion
- **FFmpeg** (command line):
  ```bash
  # Convert to MP4
  ffmpeg -i input.mp4 -c:v libx264 -b:v 2M -an -movflags +faststart hero-video.mp4
  
  # Convert to WebM
  ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1.5M -an hero-video.webm
  ```
- **Online tools**: CloudConvert, Convertio, etc.
- **Desktop software**: HandBrake, Adobe Media Encoder

## Current Hero Component Setup
The Hero component is already configured to use:
- `/public/hero-video.mp4`
- `/public/hero-video.webm`
- `/public/hero-poster.jpg`

Once you place the files, they will automatically work with the existing component.
