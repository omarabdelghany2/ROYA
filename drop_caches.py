import subprocess
import time
import os

def drop_caches():
    try:
        # Run the command to clear caches
        subprocess.run(['sudo', 'sync'])
        subprocess.run(['sudo', 'sysctl', '-w', 'vm.drop_caches=1'])
        print("Caches dropped successfully.")
    except Exception as e:
        print(f"Error dropping caches: {e}")

if __name__ == "__main__":
    # Lower the process priority (increase the nice value)
    os.nice(10)  # Increase the nice value (10 is a reasonable choice)

    while True:
        drop_caches()

        # Wait for one hour, but in smaller increments (e.g., 5 minutes)
        for _ in range(12):  # 12 * 300 seconds = 3600 seconds (1 hour)
            time.sleep(300)  # Sleep for 5 minutes at a time (300 seconds)

