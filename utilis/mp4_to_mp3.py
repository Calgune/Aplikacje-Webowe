import os

def mp4_to_mp3(input_file, output_file=None):
    # Ensure input exists
    if not os.path.isfile(input_file):
        raise FileNotFoundError(f"File not found: {input_file}")

    # Set default output name
    if output_file is None:
        base, _ = os.path.splitext(input_file)
        output_file = f"{base}.mp3"

    # Load video and extract audio
    video = VideoFileClip(input_file)
    audio = video.audio

    # Write to MP3 file
    audio.write_audiofile(output_file)

    # Close resources
    video.close()
    audio.close()

    print(f"✅ Conversion complete: {output_file}")

# Example usage:
if __name__ == "__main__":
    input_path = "In_my_darkest_hour.mp4"   # change to your file
    mp4_to_mp3(input_path)
