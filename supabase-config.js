// Verbindung zur Supabase-Datenbank des Semesterplaners.
// Der Schlüssel ist ein öffentlicher "publishable" Schlüssel: Er darf im Browser stehen.
// Geschützt sind die Daten durch Row Level Security – jede Person sieht nur ihre eigenen Einträge.
window.SUPABASE_CONFIG = {
  url: "https://xjmkczeuuoirhomonqvd.supabase.co",
  key: "sb_publishable_iwykPXz26_w_ENXvzAAtrA_6Y-abCqk"
};
