#!/bin/bash

# Define the output file
output_file="combined.md"

# Clear the output file if it already exists
> "$output_file"

# Function to recursively find and concatenate markdown files
concatenate_markdown_files() {
    local dir="$1"
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            # If the file is a directory, recurse into it
            concatenate_markdown_files "$file"
        elif [ -f "$file" ] && [[ "$file" == *.md ]]; then
            # If the file is a markdown file, concatenate it to the output file
            echo "Processing $file"
            cat "$file" >> "$output_file"
            echo -e "\n" >> "$output_file"  # Add a newline for separation
        fi
    done
}

# Start the recursion from the current directory
concatenate_markdown_files "docs"

echo "All markdown files have been concatenated into $output_file"
echo "Generating doc file"

"
