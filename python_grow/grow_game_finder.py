# Dependencies
# an object with dependant object, dependant_to object, a minimum age, and a greater/lesser than operator
# this represents the relationship between two objects's positions which must be met.

NUM_ITEMS = 6

class Dependency:
    def __init__(self, dependant_object, dependant_to_object, minimum_age, greater_lesser):
        self.dependant_object = dependant_object
        self.dependant_to_object = dependant_to_object
        self.minimum_age = minimum_age
        self.greater_lesser = greater_lesser

# Goal: 
# generate the maximum number of dependencies such that there exists a singular solution
# that satisfies all dependencies.
# for the given num_items, dependencies are uniformly generated, and added until either one solution is found or no solution exists.

def generate_dependencies(num_items):
    dependencies = []
    for i in range(num_items):
        for j in range(num_items):
            if i != j:
                dependencies.append(Dependency(i, j, 0, '>='))
    return dependencies


# ... existing code ...

def generate_dependencies(num_items):
    """Generate all possible dependencies between items"""
    dependencies = []
    for i in range(num_items):
        for j in range(num_items):
            if i != j:
                # Generate both >= and <= dependencies
                dependencies.append(Dependency(i, j, 0, '>='))
                dependencies.append(Dependency(i, j, 0, '<='))
    return dependencies

def has_unique_solution(dependencies, num_items):
    """Check if a set of dependencies has exactly one valid solution"""
    from itertools import permutations
    
    # Pre-filter invalid permutations using a more efficient check
    valid_solutions = []
    for perm in permutations(range(num_items)):
        # Use array lookup instead of repeated list access
        perm_array = list(perm)
        valid = True
        
        # Check each dependency using early exit
        for dep in dependencies:
            i1 = perm_array[dep.dependant_object]
            i2 = perm_array[dep.dependant_to_object]
            
            if (dep.greater_lesser == '>=' and i1 < i2) or \
               (dep.greater_lesser == '<=' and i1 > i2):
                valid = False
                break
                    
        if valid:
            valid_solutions.append(perm)
            if len(valid_solutions) > 1:
                return False, None
    
    if len(valid_solutions) == 1:
        return True, valid_solutions[0]
    return False, None

def find_maximal_unique_dependencies(num_items):
    """Find a maximal set of dependencies that yields exactly one solution"""
    from itertools import combinations
    all_deps = generate_dependencies(num_items)
    
    # Try increasingly larger sets of dependencies, starting from largest possible
    for size in range(len(all_deps), 0, -1):
        print(f"Trying dependency sets of size {size}...")
        
        # Use combinations to try different dependency sets
        for deps in combinations(all_deps, size):
            is_unique, solution = has_unique_solution(deps, num_items)
            if is_unique:
                return list(deps), solution
                
    return None, None

# Example usage:
if __name__ == "__main__":
    deps, solution = find_maximal_unique_dependencies(NUM_ITEMS)
    if deps:
        print("\nFound maximal dependency set with unique solution:")
        print("Dependencies:")
        for d in deps:
            print(f"{d.dependant_object} {d.greater_lesser} {d.dependant_to_object}")
        print("\nSolution:", solution)
    else:
        print("No dependency set with unique solution found")