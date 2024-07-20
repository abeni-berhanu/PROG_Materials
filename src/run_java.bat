@echo off
setlocal

:: Define paths
set "JAVA_FILE=FileLister.java"
set "CLASS_FILE=FileLister.class"
set "JAVA_HOME=C:\Program Files\Java\jdk-22"  :: Adjust this path to your JDK installation

:: Add Java to PATH
set "PATH=%JAVA_HOME%\bin;%PATH%"

:: Check if the Java file exists
if not exist "%JAVA_FILE%" (
    echo Error: Java file (%JAVA_FILE%) not found!
    exit /b 1
)

:: Compile the Java file
echo Compiling %JAVA_FILE%...
javac "%JAVA_FILE%"
if errorlevel 1 (
    echo Error: Compilation failed!
    exit /b 1
)

:: Run the Java program
echo Running FileLister...
java FileLister
if errorlevel 1 (
    echo Error: Java program execution failed!
    exit /b 1
)

echo Script completed successfully.

endlocal
