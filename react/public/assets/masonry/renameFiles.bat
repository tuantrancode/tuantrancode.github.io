@echo off
REM Rename all files in the current directory to image1.jpg, image2.jpg, etc.

setlocal enabledelayedexpansion
set /a count=1

for %%f in (*) do (
    if not "%%~nxf"=="%~nx0" (
        ren "%%f" "image!count!.jpg"
        set /a count+=1
    )
)

echo All files have been renamed to image1.jpg, image2.jpg, etc.
