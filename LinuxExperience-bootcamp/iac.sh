#!/bin/bash

echo "Criando Diretórios..."
mkdir /publico
mkdir /adm
mkdir /ven
mkdir /sec

echo "Criando grupos de Usuários..."
groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

echo "Criando Usuários..."
useradd carlos -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_ADM
useradd matheus -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_ADM
useradd camila -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_ADM

useradd paulo -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_SEC
useradd amanda -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_SEC
useradd fabio -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_SEC

useradd carolina -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_VEN
useradd william -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_VEN
useradd maria -m -s /bin/bash -p $(openssl passwd -crypt abc123) -G GRP_VEN

echo "Especificando permissões aos diretórios"
chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec

chmod 770 /adm
chmod 770 /ven
chmod 770 /sec
chmod 777 /publico

echo "Finalizado!"