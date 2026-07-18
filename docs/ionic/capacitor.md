# Capacitor

::: tip Capacitor
Pont natif qui encapsule une application web dans un conteneur iOS/Android et donne accès aux API natives du téléphone (caméra, GPS, notifications, etc.).
:::

## CLI

#### Installer la dernière version du CLI Capacitor

```bash
bun add -g @capacitor/cli
```

#### Créer le projet Android natif

```bash
bunx cap add android
```

#### Créer le projet iOS natif

```bash
bunx cap add ios
```

#### Synchroniser les changements web vers les projets natifs

```bash
bunx cap sync
```

#### Ouvrir le projet Android dans Android Studio

```bash
bunx cap open android
```

#### Ouvrir le projet iOS dans Xcode

```bash
bunx cap open ios
```
