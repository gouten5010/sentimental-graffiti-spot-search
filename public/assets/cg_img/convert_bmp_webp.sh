for f in *.bmp; do
  convert "$f" "${f%.bmp}.webp"
done
