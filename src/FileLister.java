import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class FileLister {
    public static void main(String[] args) {
        // Path to the documents directory
        String documentsPath = "../materials";
        File documentsDir = new File(documentsPath);
        
        // Check if the directory exists
        if (!documentsDir.exists() || !documentsDir.isDirectory()) {
            System.err.println("Error: The specified path is not a directory or does not exist.");
            return;
        }

        // Get list of files
        File[] files = documentsDir.listFiles();
        if (files == null) {
            System.err.println("Error: Could not list files in the directory.");
            return;
        }

        // Start JSON array
        StringBuilder jsonBuilder = new StringBuilder();
        jsonBuilder.append("[\n");

        // Append filenames
        for (int i = 0; i < files.length; i++) {
            if (files[i].isFile()) {
                jsonBuilder.append("    \"")
                           .append(files[i].getName())
                           .append("\"");
                if (i < files.length - 1) {
                    jsonBuilder.append(",\n");
                }
            }
        }

        // End JSON array
        jsonBuilder.append("\n]");

        // Write JSON to files.json
        try (FileWriter writer = new FileWriter("files_list.json")) {
            writer.write(jsonBuilder.toString());
            System.out.println("File names have been written to files.json");
        } catch (IOException e) {
            System.err.println("An error occurred while writing to files.json: " + e.getMessage());
        }
    }
}
