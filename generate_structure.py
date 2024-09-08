import os

def generate_structure(root_dir, output_file):
    with open(output_file, 'w') as f:
        f.write(f"# Project Structure of '{root_dir}'\n\n")
        for root, dirs, files in os.walk(root_dir):
            level = root.replace(root_dir, '').count(os.sep)
            indent = ' ' * 4 * level
            f.write(f"{indent}- {os.path.basename(root)}/\n")
            sub_indent = ' ' * 4 * (level + 1)
            for file in files:
                f.write(f"{sub_indent}- {file}\n")

if __name__ == "__main__":
    # Укажите корневую директорию вашего проекта
    root_directory = os.path.dirname(os.path.abspath(__file__))  # автоматически берет текущую папку
    output_file = os.path.join(root_directory, "structure.md")
    
    generate_structure(root_directory, output_file)
    print(f"Project structure saved to {output_file}")
