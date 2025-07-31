# Calculateur de rentabilité immobilière
print("Calculateur de rentabilité immobilière")
print("----------------------------------")

# Saisie des données
prix_achat = float(input("Prix d'achat du bien (€) : "))
frais_notaire = float(input("Frais de notaire (%) : "))
loyer_mensuel = float(input("Loyer mensuel estimé (€) : "))
charges_mensuelles = float(input("Charges mensuelles (€) : "))

# Calculs
frais_totaux = prix_achat * (frais_notaire / 100)
cout_total = prix_achat + frais_totaux
revenu_annuel = (loyer_mensuel - charges_mensuelles) * 12
rentabilite_annuelle = (revenu_annuel / cout_total) * 100

# Affichage des résultats
print("\nRésultats :")
print(f"Frais de notaire : {frais_totaux:.2f} €")
print(f"Coût total : {cout_total:.2f} €")
print(f"Revenu annuel net : {revenu_annuel:.2f} €")
print(f"Rentabilité annuelle : {rentabilite_annuelle:.2f} %")
