master_experiment = dict()

master_experiment['id'] = 9898732984789327
master_experiment['experiment_parameters'] = dict()
master_experiment['solutions'] = dict()

m = master_experiment
exp = master_experiment['experiment_parameters']
s = master_experiment['solutions']


exp['kinetic_values'] = {'A':343, 'B':333}
s['1'] = {'Afree':1000, 'Bfree':4444}


m['experiment_parameters']['kinetic_values']