@echo off
cd /d D:\Wep_Yhocnhanai\Web_ConDuongNhanHoa

ffmpeg -f concat -safe 0 -i public/video/hero/source/concat-dinh-duong.txt -c copy public/video/hero/hero-dinh-duong-thien-lanh-16s.mp4
if errorlevel 1 goto fallback1

ffmpeg -f concat -safe 0 -i public/video/hero/source/concat-ung-xu.txt -c copy public/video/hero/hero-ung-xu-thien-lanh-16s.mp4
if errorlevel 1 goto fallback2

ffmpeg -f concat -safe 0 -i public/video/hero/source/concat-giai-tri.txt -c copy public/video/hero/hero-giai-tri-thien-lanh-16s.mp4
if errorlevel 1 goto fallback3

echo Done.
goto end

:fallback1
ffmpeg -i public/video/hero/source/hero-video-dinh-duong-01.mp4 -i public/video/hero/source/hero-video-dinh-duong-02.mp4 -filter_complex "[0:v:0][1:v:0]concat=n=2:v=1:a=0[v]" -map "[v]" -movflags +faststart public/video/hero/hero-dinh-duong-thien-lanh-16s.mp4

:fallback2
ffmpeg -i public/video/hero/source/hero-video-ung-xu-01.mp4 -i public/video/hero/source/hero-video-ung-xu-02.mp4 -filter_complex "[0:v:0][1:v:0]concat=n=2:v=1:a=0[v]" -map "[v]" -movflags +faststart public/video/hero/hero-ung-xu-thien-lanh-16s.mp4

:fallback3
ffmpeg -i public/video/hero/source/hero-video-giai-tri-01.mp4 -i public/video/hero/source/hero-video-giai-tri-02.mp4 -filter_complex "[0:v:0][1:v:0]concat=n=2:v=1:a=0[v]" -map "[v]" -movflags +faststart public/video/hero/hero-giai-tri-thien-lanh-16s.mp4

:end
