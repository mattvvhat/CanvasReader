import subprocess, Image

fps, duration = 24, 100
for i in range(fps * duration):
    im = Image.new("RGB", (300, 300), (i, 1, 1))
    im.save("%07d.jpg" % i)
subprocess.call(["ffmpeg","-y","-r",str(fps),"-i", "%07d.jpg","-vcodec","mpeg4", "-qscale","5", "-r", str(fps), "video.avi"])
